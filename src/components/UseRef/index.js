import ButtonClicked from './ButtonClicked';
import ComponentWithRefInstanceVariable from './ComponentWithRefInstanceVariable';
import ComponentWithDomApi from './ComponentWithDomApi';
import ComponentWithRefRead from './ComponentWithRefRead';
import ComponentWithRefReadWrite from './ComponentWithRefReadWrite';
import ComponentWithCallbackRefRead from './ComponentWithCallbackRefRead';

const index = () => {
  return (
    <div>
      <p>Open console to see the result</p>
      <ButtonClicked />
      <ComponentWithRefInstanceVariable />
      <ComponentWithDomApi label="focus = true" defaultValue="true" isFocus={true} />
      <ComponentWithDomApi label="focus = false" defaultValue="false" isFocus={false} />
      <ComponentWithRefRead />
      <ComponentWithRefReadWrite />
      <ComponentWithCallbackRefRead />
    </div>
  );
};

export default index;
