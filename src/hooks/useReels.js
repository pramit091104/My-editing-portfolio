import { useEffect, useState } from "react";
import { REELS, REEL_CATEGORIES, vimeoUrl } from "@/constants/uiTexts";

// Google Sheet → File → Share → Publish to web → (sheet) → CSV. Paste that link here.
const SHEET_CSV_URL = import.meta.env.VITE_REELS_SHEET_CSV_URL;

const FALLBACK = { reels: REELS, categories: REEL_CATEGORIES };

// Minimal CSV parser that handles quoted fields ("a, b"), escaped quotes ("") and CRLF.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (ch === '"') inQuotes = false;
      else field += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === ",") { row.push(field); field = ""; }
    else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += ch;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

// Accepts a bare ID ("1107158436") or any Vimeo link ("https://vimeo.com/1107158436").
const extractVimeoId = (value) => (value.match(/\d{6,}/) || [])[0];

const isHidden = (value) => ["no", "false", "0", "hide", "hidden"].includes(value.toLowerCase());

function rowsToReels(rows) {
  const [header, ...body] = rows;
  const col = Object.fromEntries(header.map((h, i) => [h.trim().toLowerCase(), i]));
  const get = (r, name) => (col[name] !== undefined ? (r[col[name]] || "").trim() : "");

  const reels = [];
  const categoryKeys = [];

  body.forEach((r, idx) => {
    const category = get(r, "category");
    const vimeoId = extractVimeoId(get(r, "vimeo"));
    if (!category || !vimeoId || isHidden(get(r, "show"))) return;

    if (!categoryKeys.includes(category)) categoryKeys.push(category);
    reels.push({
      id: `sheet-${idx}`,
      category,
      vimeoId,
      title: get(r, "title") || category,
      embedUrl: vimeoUrl(vimeoId),
    });
  });

  // Tabs appear in the order categories first show up in the sheet.
  const categories = categoryKeys.map((key) => ({ key, label: key }));
  return { reels, categories };
}

export function useReels() {
  const [data, setData] = useState(SHEET_CSV_URL ? null : FALLBACK);

  useEffect(() => {
    if (!SHEET_CSV_URL) return;
    let cancelled = false;

    fetch(SHEET_CSV_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Sheet request failed: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        const result = rowsToReels(parseCsv(text));
        if (!result.reels.length) throw new Error("Sheet has no valid reel rows");
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        console.warn("[useReels] Using built-in reel list:", err.message);
        if (!cancelled) setData(FALLBACK);
      });

    return () => { cancelled = true; };
  }, []);

  return { reels: data?.reels ?? [], categories: data?.categories ?? [], loading: !data };
}
