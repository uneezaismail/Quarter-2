interface Tprops {
  name: string;
  id: number;
  course: string;
  batch: string;
  imageSrc: string;
}

const Card = (props: Tprops) => {
  return (
    <div>
      <div className="border border-gray-300 rounded-3xl bg-white shadow-2xl w-96 transform hover:scale-105 transition-transform duration-300">
        <h2 className="flex justify-center text-2xl p-2 font-bold bg-gray-900 text-white w-auto mb-6 rounded-t-3xl">
          UNIVERSITY OF OXFORD
        </h2>
        <div className="flex justify-center">
          <h3 className="text-xl font-semibold text-gray-700">
            STUDENT ID CARD
          </h3>
        </div>

        <div className="flex justify-center my-6 h-44">
          <img
            className="w-36 h-full  border-black border-4"
            src={props.imageSrc}
            alt="Student-img"
          />
        </div>

        
          <div className="flex justify-center mb-4">
            <div className="flex flex-col">
              <p className="font-semibold mb-2 text-lg">NAME:</p>
              <p className="font-semibold mb-2 text-lg">ID NO:</p>
              <p className="font-semibold mb-2 text-lg">COURSE:</p>
              <p className="font-semibold mb-2 text-lg">BATCH:</p>
            </div>

            <div className="flex flex-col text-right">
              <p className="mb-2 text-lg">{props.name}</p>
              <p className="mb-2 text-lg">{props.id}</p>
              <p className="mb-2 text-lg">{props.course}</p>
              <p className="mb-2 text-lg">{props.batch}</p>
            </div>
          </div>
          
        <div className="border-t-4 border-gray-700"></div>
        <div className="bg-blue-600 h-20 flex flex-col justify-end py-2 rounded-b-3xl p-4 text-white">
          <div className="flex justify-between text-sm">
            <span className="overline">Authorized Signature</span>
            <span className="overline">Holder Signature</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
