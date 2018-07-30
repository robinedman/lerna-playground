import zooui from "zooui";
import renderer from "content-renderer";

console.log("publisher zooui", zooui);
console.log(renderer.render(["one", "two", "three"]));
export default () => <div>{zooui.hero("Publish some awesome content ")}</div>;
