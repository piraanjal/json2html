
export default function json2html(data) {
    if (!Array.isArray(data) || data.length === 0) {
        return '<table data-user="pranjal18adwane@gmail.com"><thead><tr><th>No data available</th></tr></thead></table>';
    }

    // Get all possible columns from all objects
    const columns = ['Name', 'Age', 'Gender']; // Required columns in specific order

    // Build the table HTML
    let html = '<table data-user="pranjal18adwane@gmail.com">\n';
    
    // Add header row
    html += '  <thead>\n    <tr>';
    columns.forEach(column => {
        html += <th>${column}</th>;
    });
    html += '</tr>\n  </thead>\n';
    
    // Add body rows
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