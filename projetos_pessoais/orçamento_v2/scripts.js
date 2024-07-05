let contTr = 0

function addItem() {
    const tbody = document.getElementById('tbody')

    const tr = document.createElement('tr')
    tr.id = `tr${contTr}`

    const tdItem = document.createElement('td')
    const tdItemInput = document.createElement('input')
    tdItemInput.type = 'text'
    tdItemInput.className = 'td-item'
    tdItemInput.id = `td-item${contTr}`
    tdItemInput.name = `td-item${contTr}`
    tdItem.appendChild(tdItemInput)

    const tdQtd = document.createElement('td')
    const tdQtdInput = document.createElement('input')
    tdQtdInput.type = 'text'
    tdQtdInput.className = 'td-qtd'
    tdQtdInput.id = `td-qtd${contTr}`
    tdQtdInput.name = `td-qtd${contTr}`
    tdQtd.appendChild(tdQtdInput)

    const tdCusto = document.createElement('td')
    const tdCustoInput = document.createElement('input')
    tdCustoInput.type = 'text'
    tdCustoInput.className = 'td-custo'
    tdCustoInput.id = `td-custo${contTr}`
    tdCustoInput.name = `td-custo${contTr}`
    tdCusto.appendChild(tdCustoInput)


    const tdVenda = document.createElement('td')
    const tdVendaInput = document.createElement('input')
    tdVendaInput.type = 'text'
    tdVendaInput.className = 'td-venda'
    tdVendaInput.id = `td-venda${contTr}`
    tdVendaInput.name = `td-venda${contTr}`
    tdVenda.appendChild(tdVendaInput)

    

    tbody.appendChild(tr)
    tr.append(tdItem, tdQtd, tdCusto, tdVenda)
    
    contTr ++
}