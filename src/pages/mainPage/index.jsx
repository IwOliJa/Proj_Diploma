import MainCategories from "../../components/mainCategories";
import MainForm from "../../components/mainForm";
import MainSale from "../../components/mainSale";
import MainTitle from "../../components/mainTitle";

function MainPage () {
  return (
    <main>
      <MainTitle />
      <MainCategories />
      <MainForm />
      <MainSale />
    </main>
  );
}

export default MainPage;
