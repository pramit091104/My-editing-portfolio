import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: "Missing Fields",
        description: "Please fill out all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      toast({
        title: "Message Sent! 🚀",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient Glow behind Form */}
      <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-2xl blur-3xl opacity-50 pointer-events-none z-0" />

      <form
        onSubmit={handleSubmit}
        className="relative bg-zinc-900/40 backdrop-blur-md border border-zinc-800 p-5 sm:p-8 rounded-2xl shadow-xl flex flex-col gap-5 z-10"
      >
        <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
        
        {/* Name input */}
        <div className="flex flex-col gap-1.5 text-left">
          <label htmlFor="form-name" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Name
          </label>
          <input
            id="form-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full bg-zinc-950/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm sm:text-base text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300"
            required
          />
        </div>

        {/* Email input */}
        <div className="flex flex-col gap-1.5 text-left">
          <label htmlFor="form-email" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Email
          </label>
          <input
            id="form-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full bg-zinc-950/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm sm:text-base text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300"
            required
          />
        </div>

        {/* Message input */}
        <div className="flex flex-col gap-1.5 text-left">
          <label htmlFor="form-message" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Message
          </label>
          <textarea
            id="form-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project..."
            rows={4}
            className="w-full bg-zinc-950/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm sm:text-base text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300 resize-none animate-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:from-violet-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-violet-500/10 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
