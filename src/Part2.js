/* eslint-disable no-unused-vars */
import { ArrayUseState } from "./components/part2/Immutable State/ArrayUseState";
import { ObjectUseState } from "./components/part2/Immutable State/ObjectUseState";
import ReactTestify from "./components/part2/react-testify";
import { UseStateComponent } from "./components/part2/UseState/UseState";
export default function Part2() {
  return (
    <div>
      {/* <ReactTestify />
      <UseStateComponent /> */}
      <h2>Object Use State</h2>
      <ObjectUseState />
      <h2>Array Use State</h2>
      <ArrayUseState />
    </div>
  );
}
