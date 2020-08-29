module.exports = class Flujos{

  /*****************************************************************************

    Summary: Flujos Constructor
    Description: create and configure a Flujos object
    @since 1.0.0
    @class
    @param {string}     DBName        Name for the database
    @param {DBEngine}   DBEngine      DBEngine object
    @param {object}     config        initial configuration for Flujos

  *****************************************************************************/
  constructor(DBName = null, DBEngine = null, config = null){
    if (DBEngine !== null && typeof(DBName) === 'string') {
      this.DBEngine = new DBEngine(config);
      this.db = this.DBEngine.init(DBName);
    }else{
      console.warn('No dbname or dbengine passed, you must init Flujos before use it');
    }

    this.config = config;
  }

  /*****************************************************************************

    Summary: add a custom plugin to the database engine object
    Description: Add a custom plugin to the database engine object
    @since 1.0.0
    @param {databasePlugin} plugin  Plugin object to extend with

  *****************************************************************************/
  addPlugin(plugin){
    this.DBEngine.extend(this.db, plugin);
  }

  /*****************************************************************************

    Summary: Get the entire data
    Description: Retrieve all data available in the database
    @since 1.0.0
    @param {function} callback callback function to execute after get the dataset
    @return {object|array|string|number} returns the data after executing the callback on them 

  *****************************************************************************/
  all(callback = this.defaultCallback){
    let result = this.DBEngine.all(this.db, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  allAssets(callback = this.defaultCallback){
    let result = this.DBEngine.allAssets(this.db, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  allIndex(callback = this.defaultCallback){
    let result = this.DBEngine.allIndex(this.db, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchCreate(data, callback = this.defaultCallback){
    let result = new Array();

    for (let dt in data){
      result.push(this.DBEngine.create(this.db, data[dt], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchCreateAsset(data, callback = this.defaultCallback){
    let result = new Array();

    for (let dt in data){
      result.push(this.DBEngine.createAsset(this.db, data[dt], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchCreateIndex(data, callback = this.defaultCallback){
    let result = new Array();

    for (let dt in data){
      result.push(this.DBEngine.createIndex(this.db, data[dt], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchDelete(targets, callback = this.defaultCallback){
    let result = new Array();
    for (let target in targets){
      result.push(this.DBEngine.delete(this.db, targets[target], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchDeleteAsset(targets, callback = this.defaultCallback){
    let result = new Array();
    for (let target in targets){
      result.push(this.DBEngine.deleteAsset(this.db, targets[target], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchDeleteIndex(targets, callback = this.defaultCallback){
    let result = new Array();
    for (let target in targets){
      result.push(this.DBEngine.deleteIndex(this.db, targets[target], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchQuery(queries, callback = this.defaultCallback){
    let result = new Array();

    for (let query in queries){
      result.push(this.DBEngine.query(this.db, queries[query], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchQueryAsset(queries, callback = this.defaultCallback){
    let result = new Array();

    for (let query in queries){
      result.push(this.DBEngine.queryAsset(this.db, queries[query], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchQueryIndex(queries, callback = this.defaultCallback){
    let result = new Array();

    for (let query in queries){
      result.push(this.DBEngine.queryIndex(this.db, queries[query], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchQueryAsset(queries, callback = this.defaultCallback){
    let result = new Array();

    for (let query in queries){
      result.push(this.DBEngine.queryAsset(this.db, queries[query], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchQueryIndex(queries, callback = this.defaultCallback){
    let result = new Array();

    for (let query in queries){
      result.push(this.DBEngine.queryIndex(this.db, queries[query], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchRead(targets, callback = this.defaultCallback){
    let result = new Array();

    if (typeof(targets) === 'string'){

      for (let target in targets){
        result.push(this.DBEngine.read(this.db, targets[target], callback));
      }
    }

    if (typeof(targets) === 'object'){
      for (let target in targets){
        result.push(this.DBEngine.read(this.db, targets[target].target, targets[target].filter, callback));
      }
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchReadAsset(targets, callback = this.defaultCallback){
    let result = new Array();

    if (typeof(targets) === 'string'){

      for (let target in targets){
        result.push(this.DBEngine.readAsset(this.db, targets[target], callback));
      }
    }

    if (typeof(targets) === 'object'){
      for (let target in targets){
        result.push(this.DBEngine.readAsset(this.db, targets[target].target, targets[target].filter, callback));
      }
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchReadIndex(targets, callback = this.defaultCallback){
    let result = new Array();

    if (typeof(targets) === 'string'){

      for (let target in targets){
        result.push(this.DBEngine.readIndex(this.db, targets[target], callback));
      }
    }

    if (typeof(targets) === 'object'){
      for (let target in targets){
        result.push(this.DBEngine.readIndex(this.db, targets[target].target, targets[target].filter, callback));
      }
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchUpdate(targets, replacements, callback = this.defaultCallback){
    let found = new Array();
    for (let target in targets){
      found.push(this.DBEngine.read(this.db, targets[target], this.defaultCallback));
    }

    let result = new Array();
    for (let target in targets){
      result.push(this.DBEngine.update(this.db, found[target], replacements[target], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchUpdateAsset(targets, replacements, callback = this.defaultCallback){
    let found = new Array();
    for (let target in targets){
      found.push(this.DBEngine.readAsset(this.db, targets[target], this.defaultCallback));
    }

    let result = new Array();
    for (let target in targets){
      result.push(this.DBEngine.updateAsset(this.db, found[target], replacements[target], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  batchUpdateIndex(targets, replacements, callback = this.defaultCallback){
    let found = new Array();
    for (let target in targets){
      found.push(this.DBEngine.readIndex(this.db, targets[target], this.defaultCallback));
    }

    let result = new Array();
    for (let target in targets){
      result.push(this.DBEngine.updateIndex(this.db, found[target], replacements[target], callback));
    }

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  clean(callback = this.defaultCallback){
    let result = this.DBEngine.clean(this.db, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  close(callback = this.defaultCallback){
    let result = this.DBEngine.close(this.db, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  command(command, callback = this.defaultCallback){
    let result = this.DBEngine.command(this.db, command, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  config(settings, callback = this.defaultCallback){
    let result = this.DBEngine.config(this.db, settings, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  create(data, callback = this.defaultCallback){
    let result = this.DBEngine.create(this.db, data, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  createAsset(data, callback = this.defaultCallback){
    let result = this.DBEngine.createAsset(this.db, data, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  createIndex(data, callback = this.defaultCallback){
    let result = this.DBEngine.createIndex(this.db, data, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  debug(options){
    let result = this.DBEngine.setDebugOptions(this.db, options);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  defaultCallback(error, result, extra = null){
    let r;
    if (error) {
      throw error;
    }else{
      r = result;
    }
    if (extra !== null){
      return {
        r,
        extra
      }
    }else{
      return r;
    }
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  delete(target, callback = this.defaultCallback){
    let result = this.DBEngine.delete(this.db, target, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  deleteAsset(target, callback = this.defaultCallback){
    let result = this.DBEngine.deleteAsset(this.db, target, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  deleteIndex(target, callback = this.defaultCallback){
    let result = this.DBEngine.deleteIndex(this.db, target, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  deletePlugin(plugin, callback = this.defaultCallback){
    let result = this.DBEngine.deletePlugin(this.db, plugin, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  destroy(callback){
    let result = this.DBEngine.destroy(this.db, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  export(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.export(this.db, target, filter, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  exportAssets(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.exportAssets(this.db, target, filter, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  exportIndex(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.exportIndex(this.db, target, filter, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  dbInfo(){
    return this.DBEngine.getDBInfo();
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  init(DBName = null, DBEngine = null){
    if (DBEngine !== null && typeof(DBName) === 'string') {
      this.DBEngine = new DBEngine();
      this.db = this.DBEngine.init(DBName);
    }else{
      throw new Error('Error while trying to init the library, try giving a dbname and dbengine');
    }
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  migrate(origin, destiny, callback = this.defaultCallback){
    let result = this.DBEngine.migrate(this.db, origin, destiny, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  on(e, callback = (res)=>{console.log(res)}){
    let result = this.DBEngine.setEventHandler(this.db, e, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  open(callback = this.defaultCallback){
    let result = this.DBEngine.open(this.db, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  plugin(target, action){
    let result = this.DBEngine.configPlugin(this.db, target, action);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  query(query, callback = this.defaultCallback){
    let result = this.DBEngine.query(this.db, query, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  queryAsset(query, callback = this.defaultCallback){
    let result = this.DBEngine.queryAsset(this.db, query, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  queryIndex(query, callback = this.defaultCallback){
    let result = this.DBEngine.queryIndex(this.db, query, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  read(target, callback = this.defaultCallback){
    let result = this.DBEngine.read(this.db, target, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  read(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.read(this.db, target, filter, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  readAsset(target, callback = this.defaultCallback){
    let result = this.DBEngine.readAsset(this.db, target, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  readAsset(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.readAsset(this.db, target, filter, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  readIndex(target, callback = this.defaultCallback){
    let result = this.DBEngine.readIndex(this.db, target, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  readIndex(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.readIndex(this.db, target, filter, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  sync(target, config = null, callback = this.defaultCallback){
    let result = this.DBEngine.sync(this.db, target, config, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  update(target, replacement, callback = this.defaultCallback){
    let found = this.DBEngine.read(this.db, target, this.defaultCallback);

    let result = this.DBEngine.update(this.db, found, replacement, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  updateAsset(target, replacement, callback = this.defaultCallback){
    let found = this.DBEngine.readAsset(this.db, target, this.defaultCallback);

    let result = this.DBEngine.updateAsset(this.db, found, replacement, callback);

    return result;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param
    @return

  *****************************************************************************/
  updateIndex(target, replacement, callback = this.defaultCallback){
    let found = this.DBEngine.readIndex(this.db, target, this.defaultCallback);

    let result = this.DBEngine.updateIndex(this.db, found, replacement, callback);

    return result;
  }

}
