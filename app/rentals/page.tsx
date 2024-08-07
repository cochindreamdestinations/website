import { getAllPlaces } from '@/actions/places';
import TaxiCarousel from '@/components/Carousel/TaxiCarousel';
import FaqWithBg from '@/components/FaqWithImage/FaqWithBg';
import KeralaTaxiHead from '@/components/Headings/KeralaTaxiHeader';
import LeadingTaxiHead from '@/components/Headings/LeadingTaxiHead';
import PlacesGrid from '@/components/Places/PlacesGrid';
import ItenaryTable from '@/components/Tables/TariffTables/ItinaryTable';
import { TariffTable } from '@/components/Tables/TariffTables/TarrifTableAll';

export default async function Pricing() {
  const result = await getAllPlaces();
  return (
    <>
      <KeralaTaxiHead />
      <TaxiCarousel />
      <LeadingTaxiHead />
      <TariffTable />
      <ItenaryTable />
      <PlacesGrid data={result} />
      <FaqWithBg />
    </>
  );
}
