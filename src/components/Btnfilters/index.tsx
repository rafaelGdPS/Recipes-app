
type BtnFiltersProps = {
  filters: (type: string ) => void
  withouthFilters: () => void
}

function BtnFilters({ filters, withouthFilters }: BtnFiltersProps) {
  return (
    <section>
      <button onClick={ () => filters("Meals") } >Meals</button>
      <button onClick={ () => filters("Drinks")} >Drinks</button>
      <button onClick={ withouthFilters } >Sem filtos</button>
    </section>
  )
}

export default BtnFilters