import Input from "../components/UIElements/Input";
import Select from "../components/UIElements/Select";
import Switch from "../components/UIElements/Switch";
import Group from "../components/UIElements/Group";
import Radio from "../components/UIElements/Radio";

const UIMapper = {
  Input: Input,
  Select: Select,
  Switch: Switch,
  Radio: Radio,
  Group: Group,
  Ignore: () => <></>,
};

export default UIMapper;
