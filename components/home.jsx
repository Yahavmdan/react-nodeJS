import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            Home Real<i className="bi bi-geo-fill"></i>App
          </>
        }
      />
      <div className="row">
        <div className="col-12" /* home content text minimized */>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            itaque, cum magnam voluptatum eligendi ipsa odit. Doloremque, unde
            quasi voluptatum nesciunt cum magni, laboriosam excepturi
            perferendis sequi dignissimos sunt, culpa molestiae sit! Maxime
            atque eius nemo cupiditate illo commodi nobis amet voluptatibus ab
            impedit voluptatem accusantium rem porro odit soluta labore
            accusamus deleniti, animi iusto quae ea. Totam eveniet doloremque
            neque numquam dolore architecto sunt saepe animi, obcaecati rerum
            excepturi, voluptatem, hic facere illum provident dolor sapiente
            deserunt repellendus nam. Vel aperiam quae natus id quisquam ipsum
            harum cum?{" "}
          </p>{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
