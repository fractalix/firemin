import { OPERATOR_LESS_THAN } from '../../constants/TOKEN_TYPES'

const REGEX_OPERATOR_LESS_THAN_TEST = /^<([^=]|$)/

const OperatorLessThan = {
  parse: () => ({
    length: 1,
    type: OPERATOR_LESS_THAN,
    value: '<'
  }),
  test: (data) => REGEX_OPERATOR_LESS_THAN_TEST.test(data)
}

export default OperatorLessThan
