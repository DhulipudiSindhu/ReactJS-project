import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickTab = () => {
    updatedActiveTab(tabId)
  }

  const activeTabButton = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabButton}`}
        onClick={clickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
