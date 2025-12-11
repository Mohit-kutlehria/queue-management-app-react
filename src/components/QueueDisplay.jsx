function QueueDisplay({ queue = [], onUpdateStatus, onRemove }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'waiting':
        return 'var(--warning)';
      case 'serving':
        return 'var(--success)';
      case 'completed':
        return 'var(--info)';
      default:
        return 'var(--text)';
    }
  };

  queue.forEach((customer) => console.log(customer.name));

  return (
    <div className="queue-display">
      <h2>Current Queue</h2>
      {queue.length === 0 ? (
        <p className="empty-queue">No customer data</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div className="queue-item" key={customer.id}>
              <div className="customer-info">
                <h3>{customer?.name}</h3>
                <p>{customer.service}</p>
                <span
                  className="status"
                  style={{ color: getStatusColor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>

              <div className="actions">
                {customer.status === 'waiting' && (
                  <span
                    className="serve-btn"
                    onClick={() => onUpdateStatus(customer.id, 'serving')}
                  >
                    Serve
                  </span>
                )}

                {customer.status === 'serving' && (
                  <span
                    className="complete-btn"
                    onClick={() => onUpdateStatus(customer.id, 'completed')}
                  >
                    Complete
                  </span>
                )}

                <button
                  className="remove-btn"
                  onClick={() => onRemove(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;
