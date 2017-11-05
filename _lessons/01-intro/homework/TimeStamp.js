const TimeStamp = ({ time, format, children }) => (
  DOM.span({ style: {display: 'block'}}, `${children} ${moment(time).format(format)}`)
)

TimeStamp.defaultProps = {
  format: 'MMMM Do YYYY h:mm',
}
