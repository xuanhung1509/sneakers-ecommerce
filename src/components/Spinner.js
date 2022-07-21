import { CgSpinnerTwoAlt } from 'react-icons/cg';

function Spinner() {
  return (
    <div className='w-full h-72 sm:h-96 flex justify-center items-center rounded-xl'>
      <CgSpinnerTwoAlt size={100} className='animate-spin' />
    </div>
  );
}
export default Spinner;
