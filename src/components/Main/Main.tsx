
import Catalog from './Catalog/Catalog'
import Hits from './Hits/Hits'

const Main = () => {

  let catalog = true

  return (
    <section>
        <Hits />
        <Catalog catalog = {catalog}/>
    </section>
  )
}

export default Main