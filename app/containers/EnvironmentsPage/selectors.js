import { createSelector } from 'reselect';

/**
 * Direct selector to the environmentEditPage state domain
 */
const selectEnvironmentsPageDomain = () => (state) => state.get('environments');


const makeSelectEnvironmentByName = () => createSelector(
  selectEnvironmentsPageDomain(),
  (substate) => (environmentName) => {
    const environmentFound = substate.get('environments').find((environment) => environment.getIn(['metadata', 'name']) === environmentName);
    if (environmentFound) {
      return environmentFound;
    }
    return false;
  }
);

const makeSelectLoading = () => createSelector(
  selectEnvironmentsPageDomain(),
  (substate) => substate.get('loading')
);

const makeSelectError = () => createSelector(
  selectEnvironmentsPageDomain(),
  (substate) => substate.get('error')
);

const makeSelectEnvironments = () => createSelector(
  selectEnvironmentsPageDomain(),
  (substate) => substate.get('environments').toJS()
);


export {
  makeSelectEnvironmentByName,
  makeSelectEnvironments,
  makeSelectError,
  makeSelectLoading,
};
