import React from 'react'

function QuickActions() {
  return (
    <div className='quick-actions'>
      <h1> Quick Actions</h1>
      <div className='quick-actions-seperator'>
        <div className='quick-action-list'>
          <p className='action-title'> Facilities</p>
          <button className='action-button'>   Submit Work Order </button>
          <button className='action-button'>   Project Request (Minor) </button>
          <button className='action-button'>   Advanced Project Request </button>

        </div>
        <div className='quick-action-list'>
        <p className='action-title'> Fleet</p>
        <button className='action-button'>   Transportation Request </button>

        </div>
        <div className='quick-action-list'>
        <p className='action-title'> Grounds</p>
        <button className='action-button'>  Landscaping Request </button>

        </div>

      </div>
    </div>
  )
}

export default QuickActions