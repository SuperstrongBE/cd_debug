export default function SectionHeading({ title }) {
  return (
    <div className="col-span-12">
      <h1 className="relative -my-3 -mb-5 text-xl font-semibold leading-[3rem] text-slate-50 dark:text-slate-200/90 mobile:py-2">
        {title}
      </h1>
    </div>
  )
}
