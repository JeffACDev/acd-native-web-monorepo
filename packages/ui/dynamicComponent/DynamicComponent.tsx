import * as atoms from "ui/atoms";
import * as molecules from "ui/molecules";
import * as organisms from "ui/organizms";

const useStoryData = (): { state: any } => {
  throw new Error("Function not implemented.");
};

type DynamicComponentProps = {
  name: string;
  componentData: any;
  actionData: any;
};

const DynamicComponent = ({
  name,
  componentData,
  actionData,
}: DynamicComponentProps) => {
  const { state } = useStoryData();
  const data = state.stories.find((story: any) => story.name === name) || {};
  const atomicComponents = { ...atoms, ...molecules, ...organisms };
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const Component = atomicComponents[componentName] || <></>;
  return <Component data={componentData || actionData || data} />;
};
export default DynamicComponent;
