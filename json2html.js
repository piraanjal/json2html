
export default function json2html(data) {
    if (!Array.isArray(data) || data.length === 0) {
        return '<table data-user="pranjal18adwane@gmail.com"><thead><tr><th>No data available</th></tr></thead></table>';
    }
    const columns = ['Name', 'Age', 'Gender']; 

    let html = '<table data-user="pranjal18adwane@gmail.com">\n';
    
    html += '  <thead>\n    <tr>';
    columns.forEach(column => {
        html += <th>${column}</th>;
    });
    html += '</tr>\n  </thead>\n';
    
    html += '  <tbody>\n';
    data.forEach(row => {
        html += '    <tr>';
        columns.forEach(column => {
            html += <td>${row[column] || ''}</td>;
        });
        html += '</tr>\n';
    });
    html += '  </tbody>\n</table>';
    
    return html;
}