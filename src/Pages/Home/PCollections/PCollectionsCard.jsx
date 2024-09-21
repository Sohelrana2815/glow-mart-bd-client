import { useNavigate } from "react-router-dom";

const PCollectionsCard = () => {
  const navigate = useNavigate();
  const categories = [
    {
      name: "Fragrance",
      key: "fragrance",
      img: "https://i.ibb.co.com/YXwvDnx/jaglar.jpg",
    },
    {
      name: "Skin Care",
      key: "skinCare",
      img: "https://i.ibb.co.com/jMB2G7P/s6e4-Ib5ej-Ox6-Rncj-Av0w-K4-XJd-EYxt-IUg-Hg-IB8-Krc.jpg",
    },
    {
      name: "Hair Care",
      key: "hairCare",
      img: "https://i.ibb.co.com/GsHSmSW/h7mm09jj-Au-Ji-LRBOUeaz-TGg9p-Qpb-JAb-BYlp-QKs-Rc.png",
    },
    {
      name: "Daily Essential",
      key: "dailyEssential",
      img: "https://i.ibb.co.com/2KTQKL2/k-ZHMg-Z62qgtr0y-Vi-Owx-TKn-Pb-S32e-Wj-LCns6-U1027.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <div
          key={category.key}
          onClick={() => navigate(`productCollection/${category.key}`)}
          className="card bg-base-100 w-96 shadow-xl"
        >
          <figure className="px-10 pt-10">
            <img src={category.img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{category.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PCollectionsCard;
