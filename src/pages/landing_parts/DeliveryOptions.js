// TODO: CSS image resize and align

const DeliveryOptions = (props) => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* TODO: ICON down arrow here */}
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Also, we offer delivery options with
        </p>
        <div className="mt-6 flex flex-row justify-center">
          <div className="flex justify-center p-4">
            <img className="h-11" src="/images/grubHubLogo.png" alt="grubhub" />
          </div>
          <div className="flex justify-center p-4">
            <img className="h-16" src="/images/uberLogo.png" alt="ubereats" />
          </div>
          <div className="flex justify-center p-4">
            <img
              className="h-16"
              src="/images/postmates_logo.png"
              alt="postmates"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeliveryOptions;