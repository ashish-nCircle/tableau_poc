import { DataContainer, DataType, log, ParseOptions, Parser } from '@tableau/taco-toolkit/handlers'

interface PropertyRow {
  name: string
  value: string | number | null
}

interface ElementRow {
  name: string
  properties: {
    results: PropertyRow[]
  }
}

export default class MyParser extends Parser<ElementRow[]> {
  parse(fetcherResult: ElementRow[], { dataContainer }: ParseOptions): DataContainer {
    const tableName = 'Exchange Elements'
    log(`Parsing started for '${tableName}'`)

    const containerBuilder = Parser.createContainerBuilder(dataContainer)
    const { isNew, tableBuilder } = containerBuilder.getTable(tableName)

    if (isNew) {
      tableBuilder.setId('exchangeElements')
      tableBuilder.addColumnHeaders([
        {
          id: 'elementName',
          alias: 'Element Name',
          dataType: DataType.String,
        },
        {
          id: 'propertyName',
          alias: 'Property Name',
          dataType: DataType.String,
        },
        {
          id: 'propertyValue',
          alias: 'Property Value',
          dataType: DataType.String,
        },
      ])
    }

    // Add rows for each element and its properties
    fetcherResult.forEach((element) => {
      element.properties.results.forEach((property) => {
        tableBuilder.addRow({
          elementName: element.name,
          propertyName: property.name,
          propertyValue: property.value ? property.value.toString() : 'N/A',
        })
      })
    })

    return containerBuilder.getDataContainer()
  }
}
