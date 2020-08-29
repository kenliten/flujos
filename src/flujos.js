module.exports = class Flujos{

  constructor(DBName = null, DBEngine = null, config = null){
    if (DBEngine !== null && typeof(DBName) === 'string') {
      this.DBEngine = new DBEngine(config);
      this.db = this.DBEngine.init(DBName);
    }else{
      console.warn('No dbname or dbengine passed, you must init Flujos before use it');
    }

    this.config = config;
  }

  addPlugin(plugin){
    this.DBEngine.extend(plugin);
  }

  all(callback = this.defaultCallback){
    let result = this.DBEngine.all(callback);

    return result;
  }

  allAsset(callback = this.defaultCallback){
    let result = this.DBEngine.allAsset(callback);

    return result;
  }

  allIndex(callback = this.defaultCallback){
    let result = this.DBEngine.allIndex(callback);

    return result;
  }

  batchCreate(data, callback = this.defaultCallback){
    let result = new Array();

    for (let dt in data){
      result.push(this.DBEngine.create(this.db, data[dt], callback));
    }

    return result;
  }

  batchCreateAsset(data, callback = this.defaultCallback){
    let result = new Array();

    for (let dt in data){
      result.push(this.DBEngine.createAsset(this.db, data[dt], callback));
    }

    return result;
  }

  batchCreateIndex(data, callback = this.defaultCallback){
    let result = new Array();

    for (let dt in data){
      result.push(this.DBEngine.createIndex(this.db, data[dt], callback));
    }

    return result;
  }

  batchDelete(targets, callback = this.defaultCallback){
    let result = new Array();
    for (let target in targets){
      result.push(this.DBEngine.delete(this.db, targets[target], callback));
    }

    return result;
  }

  batchDeleteAsset(targets, callback = this.defaultCallback){
    let result = new Array();
    for (let target in targets){
      result.push(this.DBEngine.deleteAsset(this.db, targets[target], callback));
    }

    return result;
  }

  batchDeleteIndex(targets, callback = this.defaultCallback){
    let result = new Array();
    for (let target in targets){
      result.push(this.DBEngine.deleteIndex(this.db, targets[target], callback));
    }

    return result;
  }

  batchQuery(queries, callback = this.defaultCallback){
    let result = new Array();

    for (let query in queries){
      result.push(this.DBEngine.query(this.db, queries[query], callback));
    }

    return result;
  }

  batchQueryAsset(queries, callback = this.defaultCallback){
    let result = new Array();

    for (let query in queries){
      result.push(this.DBEngine.queryAsset(this.db, queries[query], callback));
    }

    return result;
  }

  batchQueryIndex(queries, callback = this.defaultCallback){
    let result = new Array();

    for (let query in queries){
      result.push(this.DBEngine.queryIndex(this.db, queries[query], callback));
    }

    return result;
  }

  batchQueryAsset(queries, callback = this.defaultCallback){
    let result = new Array();

    for (let query in queries){
      result.push(this.DBEngine.queryAsset(this.db, queries[query], callback));
    }

    return result;
  }

  batchQueryIndex(queries, callback = this.defaultCallback){
    let result = new Array();

    for (let query in queries){
      result.push(this.DBEngine.queryIndex(this.db, queries[query], callback));
    }

    return result;
  }

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

  clean(callback = this.defaultCallback){
    let result = this.DBEngine.clean(callback);

    return result;
  }

  close(callback = this.defaultCallback){
    let result = this.DBEngine.close(callback);

    return result;
  }

  command(command, callback = this.defaultCallback){
    let result = this.DBEngine.command(command, callback);

    return result;
  }

  config(settings, callback = this.defaultCallback){
    let result = this.DBEngine.config(settings, callback);

    return result;
  }

  create(data, callback = this.defaultCallback){
    let result = this.DBEngine.create(this.db, data, callback);

    return result;
  }

  createAsset(data, callback = this.defaultCallback){
    let result = this.DBEngine.createAsset(this.db, data, callback);

    return result;
  }

  createIndex(data, callback = this.defaultCallback){
    let result = this.DBEngine.createIndex(this.db, data, callback);

    return result;
  }

  debug(options){
    let result = this.DBEngine.setDebugOptions(options);

    return result;
  }

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

  delete(target, callback = this.defaultCallback){
    let result = this.DBEngine.delete(this.db, target, callback);

    return result;
  }

  deleteAsset(target, callback = this.defaultCallback){
    let result = this.DBEngine.deleteAsset(this.db, target, callback);

    return result;
  }

  deleteIndex(target, callback = this.defaultCallback){
    let result = this.DBEngine.deleteIndex(this.db, target, callback);

    return result;
  }

  deletePlugin(plugin, callback = this.defaultCallback){
    let result = this.DBEngine.deletePlugin(plugin, callback);

    return result;
  }

  destroy(callback){
    let result = this.DBEngine.destroy(callback);

    return result;
  }

  export(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.export(target, filter, callback);

    return result;
  }

  exportAssets(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.exportAssets(target, filter, callback);

    return result;
  }

  exportIndex(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.exportIndex(target, filter, callback);

    return result;
  }

  dbInfo(){
    return this.DBEngine.getDBInfo();
  }

  init(DBName = null, DBEngine = null){
    if (DBEngine !== null && typeof(DBName) === 'string') {
      this.DBEngine = new DBEngine();
      this.db = this.DBEngine.init(DBName);
    }else{
      throw new Error('Error while trying to init the library, try giving a dbname and dbengine');
    }
  }

  migrate(origin, destiny, callback = this.defaultCallback){
    let result = this.DBEngine.migrate(this.db, origin, destiny, callback);

    return result;
  }

  on(e, callback = (res)=>{console.log(res)}){
    let result = this.DBEngine.setEventHandler(e, callback);

    return result;
  }

  open(callback = this.defaultCallback){
    let result = this.DBEngine.open(callback);

    return result;
  }

  openAsset(callback = this.defaultCallback){
    let result = this.DBEngine.openAsset(callback);

    return result;
  }

  openIndex(callback = this.defaultCallback){
    let result = this.DBEngine.openIndex(callback);

    return result;
  }

  plugin(target, action){
    let result = this.DBEngine.configPlugin(target, action);

    return result;
  }

  query(query, callback = this.defaultCallback){
    let result = this.DBEngine.query(this.db, query, callback);

    return result;
  }

  queryAsset(query, callback = this.defaultCallback){
    let result = this.DBEngine.queryAsset(this.db, query, callback);

    return result;
  }

  queryIndex(query, callback = this.defaultCallback){
    let result = this.DBEngine.queryIndex(this.db, query, callback);

    return result;
  }

  read(target, callback = this.defaultCallback){
    let result = this.DBEngine.read(this.db, target, callback);

    return result;
  }

  read(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.read(this.db, target, filter, callback);

    return result;
  }

  readAsset(target, callback = this.defaultCallback){
    let result = this.DBEngine.readAsset(this.db, target, callback);

    return result;
  }

  readAsset(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.readAsset(this.db, target, filter, callback);

    return result;
  }

  readIndex(target, callback = this.defaultCallback){
    let result = this.DBEngine.readIndex(this.db, target, callback);

    return result;
  }

  readIndex(target, filter, callback = this.defaultCallback){
    let result = this.DBEngine.readIndex(this.db, target, filter, callback);

    return result;
  }

  sync(target, config = null, callback = this.defaultCallback){
    let result = this.DBEngine.sync(this.db, target, config, callback);

    return result;
  }

  update(target, replacement, callback = this.defaultCallback){
    let found = this.DBEngine.read(this.db, target, this.defaultCallback);

    let result = this.DBEngine.update(this.db, found, replacement, callback);

    return result;
  }

  updateAsset(target, replacement, callback = this.defaultCallback){
    let found = this.DBEngine.readAsset(this.db, target, this.defaultCallback);

    let result = this.DBEngine.updateAsset(this.db, found, replacement, callback);

    return result;
  }

  updateIndex(target, replacement, callback = this.defaultCallback){
    let found = this.DBEngine.readIndex(this.db, target, this.defaultCallback);

    let result = this.DBEngine.updateIndex(this.db, found, replacement, callback);

    return result;
  }

}
