import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-6 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Sep 13, 2025</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            laudantium mollitia reiciendis veritatis molestiae eaque tempora
            dolor perferendis voluptatem iusto autem porro animi earum, minus
            maxime debitis ipsa et! Tempore, officiis. Dolores incidunt est quo
            impedit nesciunt temporibus sunt earum!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
