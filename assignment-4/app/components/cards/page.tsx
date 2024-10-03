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
      <div className="border border-gray-300 rounded-3xl bg-white shadow-2xl xl:w-96 lg:w-80 sm:w-80 w-64 transform hover:scale-105 transition-transform duration-300">
        <h2 className="flex justify-center sm:text-2xl text-lg p-2 font-bold bg-gray-900 text-white w-auto sm:mb-4 mb-2 rounded-t-3xl">
          UNIVERSITY OF OXFORD
        </h2>
        <div className="flex justify-center">
          <h3 className="sm:text-xl text-lg font-semibold text-gray-700">
            STUDENT ID CARD
          </h3>
        </div>

        <div className="flex justify-center sm:my-4 my-2 sm:h-44 h-32">
          <img
            className="sm:w-36 w-24 h-full  border-black sm:border-4 border-2"
            src={props.imageSrc}
            alt="Student-img"
          />
        </div>

        
          <div className="flex justify-center mb-4">
            <div className="flex flex-col mr-4">
              <p className="font-semibold sm:mb-2 sm:text-lg">NAME:</p>
              <p className="font-semibold sm:mb-2 text-md sm:text-lg">ID NO:</p>
              <p className="font-semibold sm:mb-2 text-md sm:text-lg">COURSE:</p>
              <p className="font-semibold sm:mb-2 text-md sm:text-lg">BATCH:</p>
            </div>

            <div className="flex flex-col text-right">
              <p className="sm:mb-2 text-md sm:text-lg">{props.name}</p>
              <p className="sm:mb-2 text-md sm:text-lg">{props.id}</p>
              <p className="sm:mb-2 text-md sm:text-lg">{props.course}</p>
              <p className="sm:mb-2 text-md sm:text-lg">{props.batch}</p>
            </div>
          </div>
          
        <div className="border-t-4 border-gray-700"></div>
        <div className="bg-blue-600 sm:h-20 h-12 flex flex-col justify-end py-2 rounded-b-3xl p-4 text-white">
          <div className="flex justify-between sm:text-sm text-[10px]">
            <span className="overline">Authorized Signature</span>
            <span className="overline">Holder Signature</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
