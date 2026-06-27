'use client'

import { useActionState } from 'react'
import { sendContactEmail, ContactState } from '@/app/actions/contact'

const initial: ContactState = {}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-pink-600 px-8 py-3.5 font-mono text-sm text-white transition-all hover:bg-pink-500 hover:shadow-[0_0_24px_rgba(219,39,119,0.3)] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? 'Sending…' : 'Send Message →'}
    </button>
  )
}

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initial)

  if (state.success) {
    return (
      <div className="rounded-xl border border-green-500/20 bg-green-500/[0.06] px-6 py-5">
        <p className="font-mono text-sm text-green-400">Message sent — I&apos;ll reply soon.</p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-white/35"
          >
            NAME
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 transition-colors outline-none focus:border-pink-500/50 focus:bg-white/[0.05]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-white/35"
          >
            EMAIL
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 transition-colors outline-none focus:border-pink-500/50 focus:bg-white/[0.05]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-white/35"
        >
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project or just say hi…"
          className="w-full resize-none rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 transition-colors outline-none focus:border-pink-500/50 focus:bg-white/[0.05]"
        />
      </div>

      {state.error && <p className="font-mono text-xs text-red-400">{state.error}</p>}

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton pending={pending} />
        <span className="font-mono text-[10px] text-white/20">or email directly →</span>
        <a
          href="mailto:huda.s.nasih@gmail.com"
          className="font-mono text-[10px] text-pink-400/60 transition-colors hover:text-pink-400"
        >
          huda.s.nasih@gmail.com
        </a>
      </div>
    </form>
  )
}
