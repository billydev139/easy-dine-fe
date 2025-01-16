import { HashLoader } from 'react-spinners'

const CustomLoader = () => {
  return (
    <div>
          <div className="relative">
        <div className="fixed inset-0 flex items-center justify-center bg-white">
  <HashLoader color="#060668" />
</div>
</div></div>
  )
}

export default CustomLoader