const SectionHeading = ({ title }: { title: string; }) => {
  return (
    <div>
      <div>
        <h2 className="text-[clamp(35px,4vw,44px)] font-bold leading-[1.2] tracking-[-.045em] max-md:text-[28px] max-md:w-9/10 w-2/5">{title}</h2>
      </div>
    </div>
  )
}

export default SectionHeading