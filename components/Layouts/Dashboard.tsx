import Grid from "../Grid";
import GridItem from "../Grid/GridItem";

const Dashboard: React.FC = ({ children }) => {
  return (
    <main className="flex min-h-screen justify-between h-full max-w-[1440px] px-4 lg:px-20">
      <Grid>
        <GridItem className="md:col-span-3 flex flex-col">
          <div className="border-r border-b px-6 py-10 rounded-lg">
            <h1 className="font-bold text-2xl">Columbus</h1>
          </div>
          <div className="border-r border-b px-6 py-10 rounded-lg flex-1"></div>
        </GridItem>
        <GridItem className="md:col-span-9 px-6 py-10">{children}</GridItem>
      </Grid>
    </main>
  );
};

export default Dashboard;
