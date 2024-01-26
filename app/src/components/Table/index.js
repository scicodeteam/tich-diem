import './Table.scss';

const Table = ({ title, data, keys }) => {
  return (
    <div className="tab-content current">
      <div className="history_dh_1_0_0__table table-responsive">
        <table className="table">
          <thead>
            <tr>
              {title.map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {keys.map((key, index) =>
                  key === 'created_at' ? (
                    <td key={index}>{new Date(item[key]).toLocaleDateString('en-GB')}</td>
                  ) : (
                    <td key={index}>{item[key]}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
