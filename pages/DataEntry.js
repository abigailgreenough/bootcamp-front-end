import DiningForm from "../app/components/DiningForm";
import DiningTable from "../app/components/DiningTable";
import DiningAnalytics from "../app/components/DiningAnalytics";

export default function DataEntry() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ marginRight: '20px' }}> <DiningTable />
    </div>
    <div>
      <DiningAnalytics />
    </div>
</div>
      <hr />
      <div 
        style = {{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}> <DiningForm />
      </div>
    </div>
  );
}
