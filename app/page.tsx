import Header from "@/app/components/header/Header";
import EducationTemplatesList from "@/app/components/templates/EducationTemplatesList";

const Home = () => {
  return (
      <div className='min-h-screen flex flex-col'>
        <div className='fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4'>
          <Header />
            <EducationTemplatesList />
        </div>
      </div>
  );
}

export default Home;