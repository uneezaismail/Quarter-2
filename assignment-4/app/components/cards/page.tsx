export interface Tprops {
  name: string;
  id: number;
  course: string;
  batch: string;
  imageSrc: string;
}

const Card = ({ name, id, course, batch, imageSrc }: Tprops) => {
  return (
    <div>
      <div
        className="border border-gray-300 rounded-3xl bg-cover bg-center shadow-2xl xl:w-96 lg:w-80 sm:w-80 w-64 transform hover:scale-105 transition-transform duration-300"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/ombre-blue-curve-light-blue-background-vector_53876-140344.jpg')",
        }}
      >
        <h2 className="flex justify-center sm:text-2xl text-lg p-2 font-bold bg-gr-900 text-blue-950 w-auto sm:mb-4 mb-2 rounded-t-3xl ">
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
            src={imageSrc}
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
            <p className="sm:mb-2 text-md sm:text-lg">{name}</p>
            <p className="sm:mb-2 text-md sm:text-lg">{id}</p>
            <p className="sm:mb-2 text-md sm:text-lg">{course}</p>
            <p className="sm:mb-2 text-md sm:text-lg">{batch}</p>
          </div>
        </div>

        <div className="b-blue-600 sm:h-20 h-12 flex flex-col justify-end py-2 rounded-b-3xl p-4 text-white">
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
