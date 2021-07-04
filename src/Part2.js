/* eslint-disable no-unused-vars */
import FetchUseEffect from "./components/fetching/useEffect";
import UseEffectFetchSinglePost from "./components/fetching/useEffect-fetch-single-post";
import UseEffectFetchSinglePostButton from "./components/fetching/useEffect-fetch-single-post-button";

import UseReducerNew from "./components/part2/UseReducerNew";
import UseReducerNewTwo from "./components/part2/UseReducerNewTwo";
import UseReducerNewThree from "./components/part2/UseReducerNewThree";

import { ArrayUseState } from "./components/part2/Immutable State/ArrayUseState";
import { ObjectUseState } from "./components/part2/Immutable State/ObjectUseState";
import ReactTestify from "./components/part2/react-testify";
import { UseStateComponent } from "./components/part2/UseState/UseState";
import UseStateTow from "./components/part2/UseState/UseStateTwo";
import UseReducerNewFour from "./components/part2/UseReducerNewFour";
import UseReducerWithUseContext from "./components/part2/useReducerWihUseContext";

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
        <div className="col-md-7 offset-md-3">
          {/* Fetch Data */}
          {/* Fetch all data */}
          {/* <FetchUseEffect /> */}

          {/* Fetch single data */}
          {/* <UseEffectFetchSinglePost /> */}
          {/* <UseEffectFetchSinglePostButton /> */}

          {/* <UseReducerNew /> */}
          {/* <UseReducerNewTwo /> */}
          {/* <UseReducerNewThree /> */}
          {/* <UseReducerNewFour /> */}

          <UseReducerWithUseContext />
        </div>
      </div>
    </div>
  );
}
