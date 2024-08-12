import GeographicaldistributionItemsBottom from './GeographicaldistributionItemsBottom';
import GeographicaldistributionItemsOne from './GeographicaldistributionItemsTop';

export default function Geographicaldistribution() {

  return (
    <section className="flex-1 flex-col-2 space-y-2">

      <GeographicaldistributionItemsOne />

      <GeographicaldistributionItemsBottom />
    </section>
  )
}
