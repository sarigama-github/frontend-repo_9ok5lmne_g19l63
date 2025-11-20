import { motion } from 'framer-motion'

export default function SectionWrap({ id, title, subtitle, tone = 'sky', children }) {
  const palette = {
    sky: 'from-sky-500/10 via-sky-400/5 to-transparent',
    fuchsia: 'from-fuchsia-500/10 via-fuchsia-400/5 to-transparent',
    amber: 'from-amber-400/10 via-amber-300/5 to-transparent',
    emerald: 'from-emerald-400/10 via-emerald-300/5 to-transparent',
    violet: 'from-violet-500/10 via-violet-400/5 to-transparent',
    rose: 'from-rose-500/10 via-rose-400/5 to-transparent',
  }

  return (
    <section id={id} className="relative z-10">
      <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b ${palette[tone]} opacity-80`} />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        {(title || subtitle) && (
          <div className="mb-8 text-center">
            {title && (
              <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45}} className="text-3xl font-bold text-white sm:text-4xl">
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.05, duration:0.45}} className="mt-2 text-slate-300/85">
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <div className="[&_*]:leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  )
}
