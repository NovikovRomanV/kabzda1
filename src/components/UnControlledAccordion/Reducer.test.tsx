import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test("collapsed should be true", () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(true)
})

test("collapsed should be false", () => {
    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)
})

test("reducer should throw error because action type is incorrect", () => {
    const state: StateType = {
        collapsed: true
    }

    expect(() => {reducer(state, {type: "FAKE"})}).toThrowError();
})