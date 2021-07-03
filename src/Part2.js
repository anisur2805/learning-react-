/* eslint-disable no-unused-vars */
import FetchUseEffect from "./components/fetching/useEffect";
import UseEffectFetchSinglePost from "./components/fetching/useEffect-fetch-single-post";
import { ArrayUseState } from "./components/part2/Immutable State/ArrayUseState";
import { ObjectUseState } from "./components/part2/Immutable State/ObjectUseState";
import ReactTestify from "./components/part2/react-testify";
import { UseStateComponent } from "./components/part2/UseState/UseState";
import UseStateTow from "./components/part2/UseState/UseStateTwo";

export default function Part2() {
  return (
    <div>
      {/* <ReactTestify />
      <UseStateComponent /> */}

      {/* <h2>Object Use State</h2>
      <ObjectUseState />
      <h2>Array Use State</h2>
      <ArrayUseState /> */}

      {/* <UseStateTow /> */}

      <div className="container my-4">
        <div className="col-md-6 offset-md-3">
          {/* Fetch Data */}
          {/* Fetch all data */}
          {/* <FetchUseEffect /> */}

          {/* Fetch single data */}
          <UseEffectFetchSinglePost />
        </div>
      </div>
    </div>
  );
}
