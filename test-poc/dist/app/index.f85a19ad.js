// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jDVQb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tacoToolkit = require("@tableau/taco-toolkit");
var _tacoToolkitDefault = parcelHelpers.interopDefault(_tacoToolkit);
let connectorInitialized = false;
let pageLoaded = false;
const connector = new (0, _tacoToolkitDefault.default)(()=>{
    connectorInitialized = true;
    enableButtonWhenReady();
});
const authorizationToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlhrUFpfSmhoXzlTYzNZS01oRERBZFBWeFowOF9SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoicHVZYUtOaHoxTjZtRTdaYU9RNzZBYkN4Q1YydHQ3dlAiLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiI0NkNRTDRLQWI3ZXhIN0FabmU0cURkNWh5T1ZTbFR0QXJJT3JPUmxmTG9tS1RZWEc0Vnp5TjBDWjJycm5tMkV2IiwiZXhwIjoxNzQyMzc5NjQwLCJ1c2VyaWQiOiIzRlIyRlhVR0tTNFRNQjhRIn0.JFwM9fpqHIYokO1UNKR6uarhbhT0GWA2b3hYhlCojwPRT6lOrkupPrkqsIFWLk8dt_JYMUCyDv5f1ks-RpcYgOHF9ZX-ceRDUnqFKGtno25ROYxisufZVu45N6H5SbbXkIJRl8QdSW4r886gKHVsrdVRbvrCHPt9oLdIbMz32mdcVJTWTEXjynbs4_rY95bcwKtTu3hBgOMRRX5md4EaXmoY49qvnrc2To5YOQ3rauRJXhBt0MhATSyF7vR0_QTKL1ubTEA3v_8-rEXf2EgRDIwvm7Bw7Sn0n4JkfZbSYnYoYKCqtWQl9yZ7iFJ9ceT7lkSmfKyke-NLELYnHkh-aQ";
function submit() {
    connector.handlerInputs = [
        {
            fetcher: "MyFetcher",
            parser: "MyParser",
            data: {
                url: "https://developer.api.autodesk.com/dataexchange/2023-05/graphql",
                authToken: authorizationToken
            }
        }
    ];
    connector.submit();
}
function handleSubmit() {
    const button = getSubmitButton();
    button.toggleAttribute("disabled");
    button.innerText = "Processing...";
    fetchHubs();
}
// Function to fetch hubs on clicking GetHubs Data button
const fetchHubs = async ()=>{
    console.log("Fetching HUBS => ");
    const query = `
    query {
      hubs(pagination: { limit: 100 }) {
        pagination {
          cursor
          pageSize
        }
        results {
          name
          id
          region
        }
      }
    }
  `;
    const response = await fetch("https://developer.api.autodesk.com/dataexchange/2023-05/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authorizationToken}`
        },
        body: JSON.stringify({
            query
        })
    });
    console.log("Hubs data response => ", response);
    const { data } = await response.json();
    if (data && data.hubs) displayHubs(data.hubs.results) // Display hubs in the UI
    ;
    else console.error("No hubs data found");
    console.log("AFTER Fetching HUBS => ");
};
// Display Hubs in the UI (you may update your DOM as required)
function displayHubs(hubs) {
    const hubListElement = document.createElement("ul");
    hubs.forEach((hub)=>{
        const li = document.createElement("li");
        const toggleSymbol = document.createElement("span");
        toggleSymbol.innerText = "+";
        toggleSymbol.style.cursor = "pointer";
        li.innerText = `${hub.name} (${hub.region}) `;
        li.insertBefore(toggleSymbol, li.firstChild) // Add the + symbol before the hub name
        ;
        toggleSymbol.addEventListener("click", ()=>toggleProjects(hub.id, li, toggleSymbol));
        hubListElement.appendChild(li);
    });
    document.body.appendChild(hubListElement);
}
// Toggle project list for the selected hub (show/hide)
const toggleProjects = async (hubId, hubElement, toggleSymbol)=>{
    const projectListElement = hubElement.querySelector("ul");
    if (projectListElement) {
        // If project list exists, hide it and change the symbol
        projectListElement.remove();
        toggleSymbol.innerText = "+";
    } else {
        // Fetch and display projects for this hub
        fetchProjects(hubId, hubElement, toggleSymbol);
        toggleSymbol.innerText = "-" // Change the symbol to "-" indicating the list is open
        ;
    }
};
// Fetch projects for a given hub
const fetchProjects = async (hubId, hubElement, toggleSymbol)=>{
    console.log(`Fetching Projects for Hub ID: ${hubId}`);
    const query = `
    query {
      projects(hubId: "${hubId}", pagination: { limit: 100 })
        {
          pagination {
            cursor
            pageSize
          }
          results {
            name
            id
          }
          }
        }
  `;
    try {
        const response = await fetch("https://developer.api.autodesk.com/dataexchange/2023-05/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authorizationToken}`
            },
            body: JSON.stringify({
                query
            })
        });
        console.log("Fetched projects data => ", response);
        const { data } = await response.json();
        if (data && data.projects) displayProjects(data.projects.results, hubElement, toggleSymbol);
        else console.error("No projects data found");
    } catch (error) {
        console.error("Error projects => ", error);
    }
};
// Display Projects in the UI
function displayProjects(projects, hubElement, toggleSymbol) {
    const projectListElement = document.createElement("ul");
    projects.forEach((project)=>{
        const li = document.createElement("li");
        const toggleProjectSymbol = document.createElement("span");
        toggleProjectSymbol.innerText = "+";
        toggleProjectSymbol.style.cursor = "pointer";
        li.innerText = project.name;
        li.insertBefore(toggleProjectSymbol, li.firstChild) // Add the + symbol before the project name
        ;
        toggleProjectSymbol.addEventListener("click", ()=>toggletopFolders(project.id, li, toggleProjectSymbol));
        projectListElement.appendChild(li);
    });
    hubElement.appendChild(projectListElement);
}
// Toggle exchange list for the selected project (show/hide)
const toggletopFolders = async (projectId, projectElement, toggleTopFolder)=>{
    const topFolderListElement = projectElement.querySelector("ul");
    if (topFolderListElement) {
        // If exchange list exists, hide it and change the symbol
        topFolderListElement.remove();
        toggleTopFolder.innerText = "+";
    } else {
        // Fetch and display topFolders for this project
        fetchTopFolder(projectId, projectElement, toggleTopFolder);
        toggleTopFolder.innerText = "-" // Change the symbol to "-" indicating the list is open
        ;
    }
};
// Fetch top folder for a given project
const fetchTopFolder = async (projectId, projectElement, toggleTopFolder)=>{
    console.log(`Fetching topFolders for Project ID: ${projectId}`);
    const query = `
    query {
                topFolders(projectId: "${projectId}"
            
            )
                {
                  results {
                    id
                    name
      		        __typename
                  }
                }
              }
  `;
    const response = await fetch("https://developer.api.autodesk.com/dataexchange/2023-05/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authorizationToken}`
        },
        body: JSON.stringify({
            query
        })
    });
    const { data } = await response.json();
    if (data && data.topFolders) displayTopFolder(data.topFolders.results, projectElement, toggleTopFolder);
    else console.error("No topFolders data found");
};
// Display topFolders in the UI
function displayTopFolder(topFolders, projectElement, toggleTopFolder) {
    const folderListElement = document.createElement("ul");
    topFolders.forEach((folder)=>{
        const li = document.createElement("li");
        const toggleSymbol = document.createElement("span");
        toggleSymbol.innerText = "+";
        toggleSymbol.style.cursor = "pointer";
        li.innerText = folder.name;
        li.insertBefore(toggleSymbol, li.firstChild); // Add the toggle symbol before the folder name
        toggleSymbol.addEventListener("click", ()=>toggleFolderContent(folder.id, li, toggleSymbol));
        folderListElement.appendChild(li);
    });
    projectElement.appendChild(folderListElement);
}
// Toggle folder content query for the selected project (show/hide)
const toggleFolderContent = async (folderId, folderElement, toggleSymbol)=>{
    const contentListElement = folderElement.querySelector("ul");
    if (contentListElement) {
        // If content list exists, hide it and change the symbol
        contentListElement.remove();
        toggleSymbol.innerText = "+";
    } else {
        // Fetch and display folder content
        fetchFolderContent(folderId, folderElement, toggleSymbol);
        toggleSymbol.innerText = "-"; // Change the symbol to "-" indicating the list is open
    }
};
// Fetch top folder for a given project
const fetchFolderContent = async (folderId, folderElement, toggleSymbol)=>{
    console.log(`Fetching topFolders for Project ID: ${folderId}`);
    const query = `
    query {
                folder(
                      folderId: "${folderId}"
                        ) 
                   {
                    id
                    name
                   folders (pagination: {limit: 100}) {
                      pagination {
                       cursor
                       pageSize
                      }
                      results {
                      id
                      name
                      __typename
                     }
                   }
                   exchanges (pagination: {limit: 100}){
                    pagination {
                      cursor
                      pageSize
                    }
                    results {
                      id
                      name
                      __typename
                      alternativeIdentifiers{
                        fileVersionUrn
                      }
                    }
                   }
                 }
              }
  `;
    const response = await fetch("https://developer.api.autodesk.com/dataexchange/2023-05/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authorizationToken}`
        },
        body: JSON.stringify({
            query
        })
    });
    const { data } = await response.json();
    if (data && data.folder) displayFolderContent(data.folder.exchanges.results, folderElement, toggleSymbol);
    else console.error("No foldercontent data found");
};
// Display topFolders in the UI
function displayFolderContent(exchanges, folderElement, toggleSymbol) {
    const exchangeListElement = document.createElement("ul");
    exchanges.forEach((exchange)=>{
        const li = document.createElement("li");
        li.innerText = exchange.name;
        li.addEventListener("click", ()=>fetchDataForExchange(exchange.id));
        exchangeListElement.appendChild(li);
    });
    folderElement.appendChild(exchangeListElement);
}
// Fetch and load data for the selected exchange
const fetchDataForExchange = async (exchangeId)=>{
    console.log(`Fetching data for Exchange ID: `);
    // Simulate the data fetch for the selected exchange (e.g., using the connector or directly)
    submit() // You may need to modify this to submit specific data for the exchange
    ;
};
function enableButtonWhenReady() {
    if (connectorInitialized && pageLoaded) {
        const button = getSubmitButton();
        button.innerText = "Get Hubs Data!";
        button.removeAttribute("disabled");
        button.addEventListener("click", handleSubmit, {
            once: true
        });
    }
}
function getSubmitButton() {
    const button = document.getElementById("submitButton");
    if (!button) throw new Error("Submit button is not present on the page.");
    return button;
}
window.addEventListener("load", function() {
    pageLoaded = true;
    enableButtonWhenReady();
});

},{"@tableau/taco-toolkit":"b9RYd","@parcel/transformer-js/src/esmodule-helpers.js":"gAAsd"}],"b9RYd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Connector = exports.Logger = exports.getOAuthHeader = exports.getBasicAuthHeader = exports.getAuthHeader = exports.OAuthCredentials = exports.UnitsFormat = exports.NumberFormat = exports.GeographicRole = exports.DataType = exports.ColumnType = exports.ColumnRole = exports.AggType = void 0;
require("a37d38add1b359e1");
var connector_1 = require("613e250b8cca1995");
var column_header_property_1 = require("5588c007652aec");
Object.defineProperty(exports, "AggType", {
    enumerable: true,
    get: function() {
        return column_header_property_1.AggType;
    }
});
Object.defineProperty(exports, "ColumnRole", {
    enumerable: true,
    get: function() {
        return column_header_property_1.ColumnRole;
    }
});
Object.defineProperty(exports, "ColumnType", {
    enumerable: true,
    get: function() {
        return column_header_property_1.ColumnType;
    }
});
Object.defineProperty(exports, "DataType", {
    enumerable: true,
    get: function() {
        return column_header_property_1.DataType;
    }
});
Object.defineProperty(exports, "GeographicRole", {
    enumerable: true,
    get: function() {
        return column_header_property_1.GeographicRole;
    }
});
Object.defineProperty(exports, "NumberFormat", {
    enumerable: true,
    get: function() {
        return column_header_property_1.NumberFormat;
    }
});
Object.defineProperty(exports, "UnitsFormat", {
    enumerable: true,
    get: function() {
        return column_header_property_1.UnitsFormat;
    }
});
var auth_credentials_1 = require("7de2dae0931ab7a0");
Object.defineProperty(exports, "OAuthCredentials", {
    enumerable: true,
    get: function() {
        return auth_credentials_1.OAuthCredentials;
    }
});
Object.defineProperty(exports, "getAuthHeader", {
    enumerable: true,
    get: function() {
        return auth_credentials_1.getAuthHeader;
    }
});
Object.defineProperty(exports, "getBasicAuthHeader", {
    enumerable: true,
    get: function() {
        return auth_credentials_1.getBasicAuthHeader;
    }
});
Object.defineProperty(exports, "getOAuthHeader", {
    enumerable: true,
    get: function() {
        return auth_credentials_1.getOAuthHeader;
    }
});
var app_logger_1 = require("8139262f84a3877c");
Object.defineProperty(exports, "Logger", {
    enumerable: true,
    get: function() {
        return app_logger_1.AppLogger;
    }
});
var connector_2 = require("613e250b8cca1995");
Object.defineProperty(exports, "Connector", {
    enumerable: true,
    get: function() {
        return connector_2.Connector;
    }
});
exports.default = connector_1.Connector;

},{"a37d38add1b359e1":"7nCWm","613e250b8cca1995":"21ZV1","5588c007652aec":"xLBxf","7de2dae0931ab7a0":"6F4uK","8139262f84a3877c":"1EoDs"}],"7nCWm":[function(require,module,exports) {
"use strict";
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css";
document.head.appendChild(link);

},{}],"21ZV1":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Connector = void 0;
var toastify_js_1 = __importDefault(require("d0d3ab7743edb7eb"));
var ajax = __importStar(require("d913a89ec4b3aeda"));
var auth_credentials_1 = require("4e806251bb1025a");
var caller_type_1 = require("b48d06e443cfad97");
var log_level_1 = require("14d58bc14beaeb57");
var handler_input_1 = require("e85ad3ff479a3f51");
var permission_1 = require("5faa56fb8eee79d9");
var app_logger_1 = require("796fa5fa343a8aba");
var onInitSuccessDefault = function(_connector) {
// do nothing
};
var onInitFailureDefault = function(_connector, err) {
    console.error(err);
    (0, toastify_js_1.default)({
        text: "".concat(err),
        duration: -1,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            color: "white",
            background: "red"
        }
    }).showToast();
};
/**
 * The Connector class is a facade class used to talk with the eps main server.
 */ var Connector = /** @class */ function() {
    function Connector(onInitSuccess, onInitFailure) {
        if (onInitSuccess === void 0) onInitSuccess = onInitSuccessDefault;
        if (onInitFailure === void 0) onInitFailure = onInitFailureDefault;
        var _this = this;
        this.onInitSuccess = onInitSuccess;
        this.onInitFailure = onInitFailure;
        this.isInsideIframe = false;
        this.isInitialized = false;
        this.permission = {
            api: {}
        };
        this.initTimeout = setTimeout(function() {
            if (!_this.isInitialized) _this.onInitFailure(_this, new Error("There was a timeout waiting for the Connector object to initialize."));
        }, 15000);
        var queryString = window.location.search;
        if (queryString.length === 0) {
            this.isInsideIframe = true;
            window.addEventListener("message", function(event) {
                console.log("event.data.sender", event.data.sender);
                console.log("event.data", event.data);
                // TODO: validate options!
                var connectorInput = event.data;
                _this.initialize(connectorInput);
            });
        } else {
            // TODO: the function should type narrow into ConnectorInput
            var connectorInput = urlParamsToObject(queryString);
            this.initialize(connectorInput);
        }
    }
    Connector.prototype.initialize = function(connectorInput) {
        return __awaiter(this, void 0, void 0, function() {
            var serverUrl, connectionData, secrets, epsHeaders, parsedData, permissionResponse, permission;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        validateConnectorInput(connectorInput);
                        this.options = getOptionsFromInput(connectorInput);
                        serverUrl = connectorInput.serverUrl, connectionData = connectorInput.connectionData, secrets = connectorInput.secrets;
                        epsHeaders = getEpsHeaders(this.options);
                        app_logger_1.AppLogger.init({
                            level: log_level_1.LogLevel.INFO,
                            endpoint: "".concat(serverUrl, "/log"),
                            headers: epsHeaders
                        });
                        if (secrets) this.secrets = parseSecrets(secrets);
                        if (connectionData) {
                            parsedData = parseConnectionData(connectionData);
                            if (parsedData) {
                                this.handlerInputs = parsedData.handlerInputs;
                                this.appSnapshot = parsedData.appSnapshot;
                            }
                        }
                        if (!this.isInsideIframe) openWebSocket(connectorInput);
                        return [
                            4 /*yield*/ ,
                            ajax.get("".concat(serverUrl, "/permission"), {
                                headers: epsHeaders
                            })
                        ];
                    case 1:
                        permissionResponse = _a.sent();
                        permission = permissionResponse.body;
                        console.log("Got permission from server API: ".concat(JSON.stringify(permission)));
                        this.permission = permission;
                        this.initComplete();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    Connector.prototype.initComplete = function() {
        clearTimeout(this.initTimeout);
        this.isInitialized = true;
        this.onInitSuccess(this);
    };
    /**
     * Send a GET request.
     *
     * By default, it sends the request directly to the endpoint.
     * When requestOptions.bypassCorsPolicy is set, the request will be forwarded
     * to EPS. This can be used when a server has certain CORS policy. When EPS
     * receives the forwarded request, it will validate the connector's permission
     * settings defined in the connector.json.
     *
     * The function also validates the connector's permission settings on the
     * client.
     */ Connector.prototype.get = function(url, requestOptions) {
        return __awaiter(this, void 0, void 0, function() {
            var headers, bypassCorsPolicy;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        assertConnectorOptions(this.options);
                        this.validateApiPermission(url, "GET");
                        headers = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers;
                        bypassCorsPolicy = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.bypassCorsPolicy;
                        if (!bypassCorsPolicy) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            this.forwardRequest(this.options.serverUrl, {
                                method: "GET",
                                url: url,
                                headers: headers
                            })
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                    case 2:
                        return [
                            4 /*yield*/ ,
                            ajax.get(url, {
                                headers: headers
                            })
                        ];
                    case 3:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    /**
     * Send a POST request.
     *
     * By default, it sends the request directly to the endpoint.
     * When requestOptions.bypassCorsPolicy is set, the request will be forwarded
     * to EPS. This can be used when a server has certain CORS policy. When EPS
     * receives the forwarded request, it will validate the connector's permission
     * settings defined in the connector.json.
     *
     * The function also validates the connector's permission settings on the
     * client.
     */ Connector.prototype.post = function(url, body, requestOptions) {
        return __awaiter(this, void 0, void 0, function() {
            var headers, bypassCorsPolicy;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        assertConnectorOptions(this.options);
                        this.validateApiPermission(url, "POST");
                        headers = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers;
                        bypassCorsPolicy = requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.bypassCorsPolicy;
                        if (!bypassCorsPolicy) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            this.forwardRequest(this.options.serverUrl, {
                                method: "POST",
                                url: url,
                                headers: headers,
                                body: body
                            })
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                    case 2:
                        return [
                            4 /*yield*/ ,
                            ajax.post(url, body, {
                                headers: headers
                            })
                        ];
                    case 3:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    Connector.prototype.getIframeMessage = function() {
        assertConnectorOptions(this.options);
        assertHandlerInputs(this.handlerInputs);
        return {
            type: "eps-submit",
            connectionData: getConnectionData(this.appSnapshot, this.handlerInputs),
            // currently, monolith expects all secret related infos are sent with
            // this property for logging encryption
            secrets: this.secrets,
            headers: getEpsHeaders(this.options),
            submissionUrl: getSubmissionUrl(this.options)
        };
    };
    Connector.prototype.submit = function() {
        return __awaiter(this, void 0, void 0, function() {
            var message, headers, submissionUrl, body;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        assertConnectorOptions(this.options);
                        assertHandlerInputs(this.handlerInputs);
                        app_logger_1.AppLogger.flush();
                        if (!this.isInsideIframe) return [
                            3 /*break*/ ,
                            1
                        ];
                        message = this.getIframeMessage();
                        window.parent.postMessage(message, "*"); //http://localhost:8080
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 1:
                        headers = getRequestHeaders(this.options, this.secrets);
                        submissionUrl = getSubmissionUrl(this.options);
                        body = getConnectionData(this.appSnapshot, this.handlerInputs);
                        return [
                            4 /*yield*/ ,
                            ajax.post(submissionUrl, body, {
                                headers: headers
                            })
                        ];
                    case 2:
                        _a.sent();
                        closeWindow(this.options.callerType);
                        _a.label = 3;
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    Connector.prototype.validateApiPermission = function(url, method) {
        if (!permission_1.PermissionChecker.checkApiPermission(this.permission.api, url, method)) throw new Error("This app does not have permission to make ".concat(method, " request to ").concat(url));
    };
    Connector.prototype.forwardRequest = function(serverUrl, requestOptions) {
        return __awaiter(this, void 0, void 0, function() {
            var method, headers, url, forwardedRequest, response;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        assertConnectorOptions(this.options);
                        method = requestOptions.method, headers = requestOptions.headers, url = requestOptions.url;
                        forwardedRequest = {
                            method: method,
                            url: url,
                            headers: headers
                        };
                        if (forwardedRequest.method === "POST") forwardedRequest.body = requestOptions.body;
                        return [
                            4 /*yield*/ ,
                            ajax.post(serverUrl, forwardedRequest, {
                                headers: getEpsHeaders(this.options)
                            })
                        ];
                    case 1:
                        response = _a.sent();
                        // on the eps side, body is a plain object typed as AjaxResponse
                        return [
                            2 /*return*/ ,
                            response.body
                        ];
                }
            });
        });
    };
    Connector.prototype.cancel = function() {
        assertConnectorOptions(this.options);
        app_logger_1.AppLogger.flush();
        if (this.isInsideIframe) {
            var message = {
                type: "cancel"
            };
            window.parent.postMessage(message, "*"); //http://localhost:8080
        } else closeWindow(this.options.callerType);
    };
    Object.defineProperty(Connector.prototype, "oAuthCredentials", {
        get: function() {
            return new auth_credentials_1.OAuthCredentials(this.secrets || {});
        },
        enumerable: false,
        configurable: true
    });
    return Connector;
}();
exports.Connector = Connector;
function openWebSocket(connectorInput) {
    var callerType = connectorInput.callerType, browserWatcherUrl = connectorInput.browserWatcherUrl, connectionId = connectorInput.connectionId;
    if (callerType === caller_type_1.CallerType.appdev) return;
    var browserWatcherSocket = new WebSocket(browserWatcherUrl);
    browserWatcherSocket.onopen = function() {
        console.log("WebSocket Client Connected");
        browserWatcherSocket.send(JSON.stringify({
            connectionId: connectionId
        }));
    };
}
function closeWindow(callerType) {
    if (callerType === caller_type_1.CallerType.appdev) return;
    // This will cause the web socket connection to disconnect and the
    // server will clean up the process, etc.
    window.close();
}
function getOptionsFromInput(input) {
    var connectionId = input.connectionId, serverUrl = input.serverUrl, callerId = input.callerId, epsInstanceId = input.epsInstanceId, connectorClass = input.connectorClass, tacoPath = input.tacoPath, callerType = input.callerType;
    return {
        connectionId: connectionId,
        serverUrl: serverUrl,
        callerId: callerId,
        epsInstanceId: epsInstanceId,
        connectorClass: connectorClass,
        tacoPath: tacoPath,
        callerType: callerType
    };
}
function assertConnectorOptions(options) {
    if (!options) throw new Error("The connector.options are not initialized.");
}
function assertHandlerInputs(handlerInputs) {
    var e_1, _a;
    if (!Array.isArray(handlerInputs) || handlerInputs.length === 0) throw new Error("Cannot call submit without any handlerInputs.");
    var nameSet = new Set();
    try {
        for(var handlerInputs_1 = __values(handlerInputs), handlerInputs_1_1 = handlerInputs_1.next(); !handlerInputs_1_1.done; handlerInputs_1_1 = handlerInputs_1.next()){
            var handlerInput = handlerInputs_1_1.value;
            // Validate handler input is of valid shape
            if (!(0, handler_input_1.isValidHandlerInput)(handlerInput)) throw new Error("Handler input is not valid. ".concat(JSON.stringify(handlerInput)));
            // for filebased handler input validate that names are unique
            if ((0, handler_input_1.isFileBasedHandlerInput)(handlerInput)) {
                var name_1 = handlerInput.name;
                if (nameSet.has(name_1)) throw new Error('Handler input name property value "'.concat(name_1, '" is not unique.'));
                else nameSet.add(name_1);
            }
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (handlerInputs_1_1 && !handlerInputs_1_1.done && (_a = handlerInputs_1.return)) _a.call(handlerInputs_1);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
}
function getSubmissionUrl(options) {
    var connectorClass = options.connectorClass, serverUrl = options.serverUrl;
    return "".concat(serverUrl, "/extract/").concat(connectorClass);
}
function getEpsHeaders(options) {
    return {
        "caller-id": options.callerId,
        "connection-id": options.connectionId,
        "eps-instance-id": options.epsInstanceId,
        "plugin-path": options.tacoPath,
        "connector-class": options.connectorClass
    };
}
function getConnectionData(appSnapshot, handlerInputs) {
    return {
        handlerInputs: handlerInputs,
        appSnapshot: appSnapshot
    };
}
function parseSecrets(secretsInput) {
    if (!secretsInput || typeof secretsInput !== "string") {
        console.warn("Invalid input type for secrets: ".concat(typeof secretsInput, ". Skip parsing secrets."));
        return;
    }
    try {
        var secrets = JSON.parse(secretsInput);
        if (Object.keys(secrets).length > 0) return secrets;
    } catch (error) {
        console.error("Secrets exist, but could not be parsed."); // Note: don't log error
    }
}
function parseConnectionData(connectionDataInput) {
    var _a;
    if (typeof connectionDataInput !== "string" || connectionDataInput.length === 0) {
        console.warn("Invalid input type for connection data: ".concat(typeof connectionDataInput, ". Skip parsing connection data."));
        return;
    }
    try {
        var connectionData = JSON.parse(connectionDataInput);
        var appSnapshot = (_a = connectionData.appSnapshot) !== null && _a !== void 0 ? _a : null;
        var handlerInputs = connectionData.handlerInputs;
        if (!Array.isArray(handlerInputs)) {
            if (handlerInputs !== undefined) console.warn("handlerInputs must be an array, but the found type is ".concat(typeof handlerInputs, ". Ignore the handlerInputs."));
            return {
                handlerInputs: [],
                appSnapshot: appSnapshot
            };
        }
        return {
            handlerInputs: handlerInputs,
            appSnapshot: appSnapshot
        };
    } catch (error) {
        console.error("Could not parse connectionData: ".concat(error, " with input ").concat(connectionDataInput));
    }
}
// TODO: we should do type narrowing with this function
function validateConnectorInput(input) {
    // Just log for now. Do not throw error.
    var requiredKeys;
    if (caller_type_1.CallerType.vizQLServer === input.callerType) requiredKeys = [
        // Other field are provided to eps requests, outside and after the iframe.
        "callerType",
        "connectionId",
        "secrets",
        "serverUrl"
    ];
    else requiredKeys = [
        "browserWatcherUrl",
        "callerId",
        "connectorClass",
        "connectionId",
        "epsInstanceId",
        "serverUrl",
        "tacoPath"
    ];
    var missingKeys = requiredKeys.filter(function(k) {
        return input[k] === undefined;
    });
    if (missingKeys.length > 0) {
        console.error("These keys are missing from connector input: ".concat(missingKeys.join(", ")));
        return false;
    }
    return true;
}
function urlParamsToObject(serializedParams) {
    var entries = new URLSearchParams(serializedParams);
    var result = {};
    entries.forEach(function(value, key) {
        result[key] = value;
    });
    return result;
}
function getRequestHeaders(options, secrets) {
    var headers = getEpsHeaders(options);
    if (secrets) headers.secrets = JSON.stringify(secrets);
    // in case of oAuth monolith will also send access-token and refresh token in the request headers directly,
    // the /extract api will expect oauth access and refresh token in the headers
    var credential = new auth_credentials_1.OAuthCredentials(secrets);
    if (typeof credential.accessToken === "string") headers["access-token"] = credential.accessToken;
    //TODO (W-14199268): for quickbooks need realm id in secrets, will be removed once we support arbitrary oauth tokens
    if (secrets && typeof secrets.realmid === "string") headers["realmid"] = secrets.realmid;
    return headers;
}

},{"d0d3ab7743edb7eb":"dGR6X","d913a89ec4b3aeda":"lod56","4e806251bb1025a":"6F4uK","b48d06e443cfad97":"jwlvN","14d58bc14beaeb57":"cZI2L","e85ad3ff479a3f51":"4UsOu","5faa56fb8eee79d9":"8jR8z","796fa5fa343a8aba":"1EoDs"}],"dGR6X":[function(require,module,exports) {
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */ (function(root, factory) {
    if (0, module.exports) module.exports = factory();
    else root.Toastify = factory();
})(this, function(global) {
    // Object initialization
    var Toastify = function(options) {
        // Returning a new init object
        return new Toastify.lib.init(options);
    }, // Library version
    version = "1.12.0";
    // Set the default global options
    Toastify.defaults = {
        oldestFirst: true,
        text: "Toastify is awesome!",
        node: undefined,
        duration: 3000,
        selector: undefined,
        callback: function() {},
        destination: undefined,
        newWindow: false,
        close: false,
        gravity: "toastify-top",
        positionLeft: false,
        position: "",
        backgroundColor: "",
        avatar: "",
        className: "",
        stopOnFocus: true,
        onClick: function() {},
        offset: {
            x: 0,
            y: 0
        },
        escapeMarkup: true,
        ariaLive: "polite",
        style: {
            background: ""
        }
    };
    // Defining the prototype of the object
    Toastify.lib = Toastify.prototype = {
        toastify: version,
        constructor: Toastify,
        // Initializing the object with required parameters
        init: function(options) {
            // Verifying and validating the input object
            if (!options) options = {};
            // Creating the options object
            this.options = {};
            this.toastElement = null;
            // Validating the options
            this.options.text = options.text || Toastify.defaults.text; // Display message
            this.options.node = options.node || Toastify.defaults.node; // Display content as node
            this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration
            this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
            this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
            this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination
            this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
            this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
            this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom
            this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
            this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
            this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
            this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
            this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
            this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
            this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
            this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
            this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
            this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
            this.options.style = options.style || Toastify.defaults.style;
            if (options.backgroundColor) this.options.style.background = options.backgroundColor;
            // Returning the current object for chaining functions
            return this;
        },
        // Building the DOM element
        buildToast: function() {
            // Validating if the options are defined
            if (!this.options) throw "Toastify is not initialized";
            // Creating the DOM object
            var divElement = document.createElement("div");
            divElement.className = "toastify on " + this.options.className;
            // Positioning toast to left or right or center
            if (!!this.options.position) divElement.className += " toastify-" + this.options.position;
            else // To be depreciated in further versions
            if (this.options.positionLeft === true) {
                divElement.className += " toastify-left";
                console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.");
            } else // Default position
            divElement.className += " toastify-right";
            // Assigning gravity of element
            divElement.className += " " + this.options.gravity;
            if (this.options.backgroundColor) // This is being deprecated in favor of using the style HTML DOM property
            console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
            // Loop through our style object and apply styles to divElement
            for(var property in this.options.style)divElement.style[property] = this.options.style[property];
            // Announce the toast to screen readers
            if (this.options.ariaLive) divElement.setAttribute("aria-live", this.options.ariaLive);
            // Adding the toast message/node
            if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) // If we have a valid node, we insert it
            divElement.appendChild(this.options.node);
            else {
                if (this.options.escapeMarkup) divElement.innerText = this.options.text;
                else divElement.innerHTML = this.options.text;
                if (this.options.avatar !== "") {
                    var avatarElement = document.createElement("img");
                    avatarElement.src = this.options.avatar;
                    avatarElement.className = "toastify-avatar";
                    if (this.options.position == "left" || this.options.positionLeft === true) // Adding close icon on the left of content
                    divElement.appendChild(avatarElement);
                    else // Adding close icon on the right of content
                    divElement.insertAdjacentElement("afterbegin", avatarElement);
                }
            }
            // Adding a close icon to the toast
            if (this.options.close === true) {
                // Create a span for close element
                var closeElement = document.createElement("button");
                closeElement.type = "button";
                closeElement.setAttribute("aria-label", "Close");
                closeElement.className = "toast-close";
                closeElement.innerHTML = "&#10006;";
                // Triggering the removal of toast from DOM on close click
                closeElement.addEventListener("click", (function(event) {
                    event.stopPropagation();
                    this.removeElement(this.toastElement);
                    window.clearTimeout(this.toastElement.timeOutValue);
                }).bind(this));
                //Calculating screen width
                var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
                // Adding the close icon to the toast element
                // Display on the right if screen width is less than or equal to 360px
                if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) // Adding close icon on the left of content
                divElement.insertAdjacentElement("afterbegin", closeElement);
                else // Adding close icon on the right of content
                divElement.appendChild(closeElement);
            }
            // Clear timeout while toast is focused
            if (this.options.stopOnFocus && this.options.duration > 0) {
                var self = this;
                // stop countdown
                divElement.addEventListener("mouseover", function(event) {
                    window.clearTimeout(divElement.timeOutValue);
                });
                // add back the timeout
                divElement.addEventListener("mouseleave", function() {
                    divElement.timeOutValue = window.setTimeout(function() {
                        // Remove the toast from DOM
                        self.removeElement(divElement);
                    }, self.options.duration);
                });
            }
            // Adding an on-click destination path
            if (typeof this.options.destination !== "undefined") divElement.addEventListener("click", (function(event) {
                event.stopPropagation();
                if (this.options.newWindow === true) window.open(this.options.destination, "_blank");
                else window.location = this.options.destination;
            }).bind(this));
            if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") divElement.addEventListener("click", (function(event) {
                event.stopPropagation();
                this.options.onClick();
            }).bind(this));
            // Adding offset
            if (typeof this.options.offset === "object") {
                var x = getAxisOffsetAValue("x", this.options);
                var y = getAxisOffsetAValue("y", this.options);
                var xOffset = this.options.position == "left" ? x : "-" + x;
                var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
                divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
            }
            // Returning the generated element
            return divElement;
        },
        // Displaying the toast
        showToast: function() {
            // Creating the DOM object for the toast
            this.toastElement = this.buildToast();
            // Getting the root element to with the toast needs to be added
            var rootElement;
            if (typeof this.options.selector === "string") rootElement = document.getElementById(this.options.selector);
            else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== "undefined" && this.options.selector instanceof ShadowRoot) rootElement = this.options.selector;
            else rootElement = document.body;
            // Validating if root element is present in DOM
            if (!rootElement) throw "Root element is not defined";
            // Adding the DOM element
            var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
            rootElement.insertBefore(this.toastElement, elementToInsert);
            // Repositioning the toasts in case multiple toasts are present
            Toastify.reposition();
            if (this.options.duration > 0) this.toastElement.timeOutValue = window.setTimeout((function() {
                // Remove the toast from DOM
                this.removeElement(this.toastElement);
            }).bind(this), this.options.duration); // Binding `this` for function invocation
            // Supporting function chaining
            return this;
        },
        hideToast: function() {
            if (this.toastElement.timeOutValue) clearTimeout(this.toastElement.timeOutValue);
            this.removeElement(this.toastElement);
        },
        // Removing the element from the DOM
        removeElement: function(toastElement) {
            // Hiding the element
            // toastElement.classList.remove("on");
            toastElement.className = toastElement.className.replace(" on", "");
            // Removing the element from DOM after transition end
            window.setTimeout((function() {
                // remove options node if any
                if (this.options.node && this.options.node.parentNode) this.options.node.parentNode.removeChild(this.options.node);
                // Remove the element from the DOM, only when the parent node was not removed before.
                if (toastElement.parentNode) toastElement.parentNode.removeChild(toastElement);
                // Calling the callback function
                this.options.callback.call(toastElement);
                // Repositioning the toasts again
                Toastify.reposition();
            }).bind(this), 400); // Binding `this` for function invocation
        }
    };
    // Positioning the toasts on the DOM
    Toastify.reposition = function() {
        // Top margins with gravity
        var topLeftOffsetSize = {
            top: 15,
            bottom: 15
        };
        var topRightOffsetSize = {
            top: 15,
            bottom: 15
        };
        var offsetSize = {
            top: 15,
            bottom: 15
        };
        // Get all toast messages on the DOM
        var allToasts = document.getElementsByClassName("toastify");
        var classUsed;
        // Modifying the position of each toast element
        for(var i = 0; i < allToasts.length; i++){
            // Getting the applied gravity
            if (containsClass(allToasts[i], "toastify-top") === true) classUsed = "toastify-top";
            else classUsed = "toastify-bottom";
            var height = allToasts[i].offsetHeight;
            classUsed = classUsed.substr(9, classUsed.length - 1);
            // Spacing between toasts
            var offset = 15;
            var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
            // Show toast in center if screen with less than or equal to 360px
            if (width <= 360) {
                // Setting the position
                allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
                offsetSize[classUsed] += height + offset;
            } else if (containsClass(allToasts[i], "toastify-left") === true) {
                // Setting the position
                allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
                topLeftOffsetSize[classUsed] += height + offset;
            } else {
                // Setting the position
                allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
                topRightOffsetSize[classUsed] += height + offset;
            }
        }
        // Supporting function chaining
        return this;
    };
    // Helper function to get offset.
    function getAxisOffsetAValue(axis, options) {
        if (options.offset[axis]) {
            if (isNaN(options.offset[axis])) return options.offset[axis];
            else return options.offset[axis] + "px";
        }
        return "0px";
    }
    function containsClass(elem, yourClass) {
        if (!elem || typeof yourClass !== "string") return false;
        else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) return true;
        else return false;
    }
    // Setting up the prototype for the init object
    Toastify.lib.init.prototype = Toastify.lib;
    // Returning the Toastify function to be assigned to the window object/module
    return Toastify;
});

},{}],"lod56":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.post = exports.get = void 0;
var request_1 = require("f3d0a36972c2fe50");
function get(url, options) {
    return ajaxRequest(url, __assign({
        method: "GET"
    }, options));
}
exports.get = get;
function post(url, body, options) {
    return ajaxRequest(url, __assign({
        method: "POST",
        body: body
    }, options));
}
exports.post = post;
function ajaxRequest(url, requestConfig) {
    return __awaiter(this, void 0, void 0, function() {
        var response;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        (0, request_1.request)(url, requestConfig)
                    ];
                case 1:
                    response = _a.sent();
                    return [
                        2 /*return*/ ,
                        {
                            body: response.body,
                            headers: response.headers,
                            ok: response.ok,
                            status: response.status,
                            type: response.type,
                            text: response.text
                        }
                    ];
            }
        });
    });
}

},{"f3d0a36972c2fe50":"6IrCy"}],"6IrCy":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeHeaders = exports.request = void 0;
var superagent_1 = __importDefault(require("21cacca4a961f05b"));
var type_utils_1 = require("53fa1586c4f05d7f");
function request(url, requestConfig) {
    var method = requestConfig.method, headers = requestConfig.headers, query = requestConfig.query, body = requestConfig.body;
    return (0, superagent_1.default)(method, url).set(headers ? normalizeHeaders(headers) : {}).query(query !== null && query !== void 0 ? query : {}).send(body);
}
exports.request = request;
/**
 * Normalize header object which has unknown type values.
 *
 * When a header value is not string type, the function converts it into string.
 * The function also filter out the entries with null or undefined value.
 */ function normalizeHeaders(obj) {
    var e_1, _a;
    var normalized = {};
    try {
        for(var _b = __values(Object.entries(obj)), _c = _b.next(); !_c.done; _c = _b.next()){
            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
            if (value === null || value === undefined) continue;
            normalized[key] = (0, type_utils_1.stringifyUnknown)(value);
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    return normalized;
}
exports.normalizeHeaders = normalizeHeaders;

},{"21cacca4a961f05b":"1aP8c","53fa1586c4f05d7f":"kufxQ"}],"1aP8c":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/**
 * Root reference for iframes.
 */ var root;
if (typeof window !== "undefined") // Browser window
root = window;
else if (typeof self === "undefined") {
    // Other environments
    console.warn("Using browser-only version of superagent in non-browser environment");
    root = void 0;
} else // Web Worker
root = self;
var Emitter = require("53e2f1c346255ff9");
var safeStringify = require("5c435e2bc45b4ed9");
var qs = require("ebbe3d0f8d85fa3f");
var RequestBase = require("6fce6c5c65240c3c");
var _require = require("a105cd64f2836ed6"), isObject = _require.isObject, mixin = _require.mixin, hasOwn = _require.hasOwn;
var ResponseBase = require("73759f0cf2bd611f");
var Agent = require("8e302bf23d41e177");
/**
 * Noop.
 */ function noop() {}
/**
 * Expose `request`.
 */ module.exports = function(method, url) {
    // callback
    if (typeof url === "function") return new exports.Request("GET", method).end(url);
     // url first
    if (arguments.length === 1) return new exports.Request("GET", method);
    return new exports.Request(method, url);
};
exports = module.exports;
var request = exports;
exports.Request = Request;
/**
 * Determine XHR.
 */ request.getXHR = function() {
    if (root.XMLHttpRequest && (!root.location || root.location.protocol !== "file:" || !root.ActiveXObject)) return new XMLHttpRequest();
    try {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (_unused) {
    /**/ }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (_unused2) {
    /**/ }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (_unused3) {
    /**/ }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (_unused4) {
    /**/ }
    throw new Error("Browser-only version of superagent could not find XHR");
};
/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */ var trim = "".trim ? function(s) {
    return s.trim();
} : function(s) {
    return s.replace(/(^\s*|\s*$)/g, "");
};
/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */ function serialize(object) {
    if (!isObject(object)) return object;
    var pairs = [];
    for(var key in object)if (hasOwn(object, key)) pushEncodedKeyValuePair(pairs, key, object[key]);
    return pairs.join("&");
}
/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */ function pushEncodedKeyValuePair(pairs, key, value) {
    if (value === undefined) return;
    if (value === null) {
        pairs.push(encodeURI(key));
        return;
    }
    if (Array.isArray(value)) {
        var _iterator = _createForOfIteratorHelper(value), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var v = _step.value;
                pushEncodedKeyValuePair(pairs, key, v);
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
    } else if (isObject(value)) {
        for(var subkey in value)if (hasOwn(value, subkey)) pushEncodedKeyValuePair(pairs, "".concat(key, "[").concat(subkey, "]"), value[subkey]);
    } else pairs.push(encodeURI(key) + "=" + encodeURIComponent(value));
}
/**
 * Expose serialization method.
 */ request.serializeObject = serialize;
/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */ function parseString(string_) {
    var object = {};
    var pairs = string_.split("&");
    var pair;
    var pos;
    for(var i = 0, length_ = pairs.length; i < length_; ++i){
        pair = pairs[i];
        pos = pair.indexOf("=");
        if (pos === -1) object[decodeURIComponent(pair)] = "";
        else object[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }
    return object;
}
/**
 * Expose parser.
 */ request.parseString = parseString;
/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */ request.types = {
    html: "text/html",
    json: "application/json",
    xml: "text/xml",
    urlencoded: "application/x-www-form-urlencoded",
    form: "application/x-www-form-urlencoded",
    "form-data": "application/x-www-form-urlencoded"
};
/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */ request.serialize = {
    "application/x-www-form-urlencoded": qs.stringify,
    "application/json": safeStringify
};
/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */ request.parse = {
    "application/x-www-form-urlencoded": parseString,
    "application/json": JSON.parse
};
/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */ function parseHeader(string_) {
    var lines = string_.split(/\r?\n/);
    var fields = {};
    var index;
    var line;
    var field;
    var value;
    for(var i = 0, length_ = lines.length; i < length_; ++i){
        line = lines[i];
        index = line.indexOf(":");
        if (index === -1) continue;
        field = line.slice(0, index).toLowerCase();
        value = trim(line.slice(index + 1));
        fields[field] = value;
    }
    return fields;
}
/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */ function isJSON(mime) {
    // should match /json or +json
    // but not /json-seq
    return /[/+]json($|[^-\w])/i.test(mime);
}
/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */ function Response(request_) {
    this.req = request_;
    this.xhr = this.req.xhr; // responseText is accessible only if responseType is '' or 'text' and on older browsers
    this.text = this.req.method !== "HEAD" && (this.xhr.responseType === "" || this.xhr.responseType === "text") || typeof this.xhr.responseType === "undefined" ? this.xhr.responseText : null;
    this.statusText = this.req.xhr.statusText;
    var status = this.xhr.status; // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
    if (status === 1223) status = 204;
    this._setStatusProperties(status);
    this.headers = parseHeader(this.xhr.getAllResponseHeaders());
    this.header = this.headers; // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
    // getResponseHeader still works. so we get content-type even if getting
    // other headers fails.
    this.header["content-type"] = this.xhr.getResponseHeader("content-type");
    this._setHeaderProperties(this.header);
    if (this.text === null && request_._responseType) this.body = this.xhr.response;
    else this.body = this.req.method === "HEAD" ? null : this._parseBody(this.text ? this.text : this.xhr.response);
}
mixin(Response.prototype, ResponseBase.prototype);
/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */ Response.prototype._parseBody = function(string_) {
    var parse = request.parse[this.type];
    if (this.req._parser) return this.req._parser(this, string_);
    if (!parse && isJSON(this.type)) parse = request.parse["application/json"];
    return parse && string_ && (string_.length > 0 || string_ instanceof Object) ? parse(string_) : null;
};
/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */ Response.prototype.toError = function() {
    var req = this.req;
    var method = req.method;
    var url = req.url;
    var message = "cannot ".concat(method, " ").concat(url, " (").concat(this.status, ")");
    var error = new Error(message);
    error.status = this.status;
    error.method = method;
    error.url = url;
    return error;
};
/**
 * Expose `Response`.
 */ request.Response = Response;
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */ function Request(method, url) {
    var self1 = this;
    this._query = this._query || [];
    this.method = method;
    this.url = url;
    this.header = {}; // preserves header name case
    this._header = {}; // coerces header names to lowercase
    this.on("end", function() {
        var error = null;
        var res = null;
        try {
            res = new Response(self1);
        } catch (err) {
            error = new Error("Parser is unable to parse the response");
            error.parse = true;
            error.original = err; // issue #675: return the raw response if the response parsing fails
            if (self1.xhr) {
                // ie9 doesn't have 'response' property
                error.rawResponse = typeof self1.xhr.responseType === "undefined" ? self1.xhr.responseText : self1.xhr.response; // issue #876: return the http status code if the response parsing fails
                error.status = self1.xhr.status ? self1.xhr.status : null;
                error.statusCode = error.status; // backwards-compat only
            } else {
                error.rawResponse = null;
                error.status = null;
            }
            return self1.callback(error);
        }
        self1.emit("response", res);
        var new_error;
        try {
            if (!self1._isResponseOK(res)) new_error = new Error(res.statusText || res.text || "Unsuccessful HTTP response");
        } catch (err) {
            new_error = err; // ok() callback can throw
        } // #1000 don't catch errors from the callback to avoid double calling it
        if (new_error) {
            new_error.original = error;
            new_error.response = res;
            new_error.status = res.status;
            self1.callback(new_error, res);
        } else self1.callback(null, res);
    });
}
/**
 * Mixin `Emitter` and `RequestBase`.
 */ // eslint-disable-next-line new-cap
Emitter(Request.prototype);
mixin(Request.prototype, RequestBase.prototype);
/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */ Request.prototype.type = function(type) {
    this.set("Content-Type", request.types[type] || type);
    return this;
};
/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */ Request.prototype.accept = function(type) {
    this.set("Accept", request.types[type] || type);
    return this;
};
/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */ Request.prototype.auth = function(user, pass, options) {
    if (arguments.length === 1) pass = "";
    if (_typeof(pass) === "object" && pass !== null) {
        // pass is optional and can be replaced with options
        options = pass;
        pass = "";
    }
    if (!options) options = {
        type: typeof btoa === "function" ? "basic" : "auto"
    };
    var encoder = options.encoder ? options.encoder : function(string) {
        if (typeof btoa === "function") return btoa(string);
        throw new Error("Cannot use basic auth, btoa is not a function");
    };
    return this._auth(user, pass, options, encoder);
};
/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */ Request.prototype.query = function(value) {
    if (typeof value !== "string") value = serialize(value);
    if (value) this._query.push(value);
    return this;
};
/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */ Request.prototype.attach = function(field, file, options) {
    if (file) {
        if (this._data) throw new Error("superagent can't mix .send() and .attach()");
        this._getFormData().append(field, file, options || file.name);
    }
    return this;
};
Request.prototype._getFormData = function() {
    if (!this._formData) this._formData = new root.FormData();
    return this._formData;
};
/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */ Request.prototype.callback = function(error, res) {
    if (this._shouldRetry(error, res)) return this._retry();
    var fn = this._callback;
    this.clearTimeout();
    if (error) {
        if (this._maxRetries) error.retries = this._retries - 1;
        this.emit("error", error);
    }
    fn(error, res);
};
/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */ Request.prototype.crossDomainError = function() {
    var error = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
    error.crossDomain = true;
    error.status = this.status;
    error.method = this.method;
    error.url = this.url;
    this.callback(error);
}; // This only warns, because the request is still likely to work
Request.prototype.agent = function() {
    console.warn("This is not supported in browser version of superagent");
    return this;
};
Request.prototype.ca = Request.prototype.agent;
Request.prototype.buffer = Request.prototype.ca; // This throws, because it can't send/receive data as expected
Request.prototype.write = function() {
    throw new Error("Streaming is not supported in browser version of superagent");
};
Request.prototype.pipe = Request.prototype.write;
/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj host object
 * @return {Boolean} is a host object
 * @api private
 */ Request.prototype._isHost = function(object) {
    // Native objects stringify to [object File], [object Blob], [object FormData], etc.
    return object && _typeof(object) === "object" && !Array.isArray(object) && Object.prototype.toString.call(object) !== "[object Object]";
};
/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */ Request.prototype.end = function(fn) {
    if (this._endCalled) console.warn("Warning: .end() was called twice. This is not supported in superagent");
    this._endCalled = true; // store callback
    this._callback = fn || noop; // querystring
    this._finalizeQueryString();
    this._end();
};
Request.prototype._setUploadTimeout = function() {
    var self1 = this; // upload timeout it's wokrs only if deadline timeout is off
    if (this._uploadTimeout && !this._uploadTimeoutTimer) this._uploadTimeoutTimer = setTimeout(function() {
        self1._timeoutError("Upload timeout of ", self1._uploadTimeout, "ETIMEDOUT");
    }, this._uploadTimeout);
}; // eslint-disable-next-line complexity
Request.prototype._end = function() {
    if (this._aborted) return this.callback(new Error("The request has been aborted even before .end() was called"));
    var self1 = this;
    this.xhr = request.getXHR();
    var xhr = this.xhr;
    var data = this._formData || this._data;
    this._setTimeouts(); // state change
    xhr.addEventListener("readystatechange", function() {
        var readyState = xhr.readyState;
        if (readyState >= 2 && self1._responseTimeoutTimer) clearTimeout(self1._responseTimeoutTimer);
        if (readyState !== 4) return;
         // In IE9, reads to any property (e.g. status) off of an aborted XHR will
        // result in the error "Could not complete the operation due to error c00c023f"
        var status;
        try {
            status = xhr.status;
        } catch (_unused5) {
            status = 0;
        }
        if (!status) {
            if (self1.timedout || self1._aborted) return;
            return self1.crossDomainError();
        }
        self1.emit("end");
    }); // progress
    var handleProgress = function handleProgress(direction, e) {
        if (e.total > 0) {
            e.percent = e.loaded / e.total * 100;
            if (e.percent === 100) clearTimeout(self1._uploadTimeoutTimer);
        }
        e.direction = direction;
        self1.emit("progress", e);
    };
    if (this.hasListeners("progress")) try {
        xhr.addEventListener("progress", handleProgress.bind(null, "download"));
        if (xhr.upload) xhr.upload.addEventListener("progress", handleProgress.bind(null, "upload"));
    } catch (_unused6) {
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
    if (xhr.upload) this._setUploadTimeout();
     // initiate request
    try {
        if (this.username && this.password) xhr.open(this.method, this.url, true, this.username, this.password);
        else xhr.open(this.method, this.url, true);
    } catch (err) {
        // see #1149
        return this.callback(err);
    } // CORS
    if (this._withCredentials) xhr.withCredentials = true; // body
    if (!this._formData && this.method !== "GET" && this.method !== "HEAD" && typeof data !== "string" && !this._isHost(data)) {
        // serialize stuff
        var contentType = this._header["content-type"];
        var _serialize = this._serializer || request.serialize[contentType ? contentType.split(";")[0] : ""];
        if (!_serialize && isJSON(contentType)) _serialize = request.serialize["application/json"];
        if (_serialize) data = _serialize(data);
    } // set header fields
    for(var field in this.header){
        if (this.header[field] === null) continue;
        if (hasOwn(this.header, field)) xhr.setRequestHeader(field, this.header[field]);
    }
    if (this._responseType) xhr.responseType = this._responseType;
     // send stuff
    this.emit("request", this); // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
    // We need null here if data is undefined
    xhr.send(typeof data === "undefined" ? null : data);
};
request.agent = function() {
    return new Agent();
};
var _loop = function _loop() {
    var method = _arr[_i];
    Agent.prototype[method.toLowerCase()] = function(url, fn) {
        var request_ = new request.Request(method, url);
        this._setDefaults(request_);
        if (fn) request_.end(fn);
        return request_;
    };
};
for(var _i = 0, _arr = [
    "GET",
    "POST",
    "OPTIONS",
    "PATCH",
    "PUT",
    "DELETE"
]; _i < _arr.length; _i++)_loop();
Agent.prototype.del = Agent.prototype.delete;
/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */ request.get = function(url, data, fn) {
    var request_ = request("GET", url);
    if (typeof data === "function") {
        fn = data;
        data = null;
    }
    if (data) request_.query(data);
    if (fn) request_.end(fn);
    return request_;
};
/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */ request.head = function(url, data, fn) {
    var request_ = request("HEAD", url);
    if (typeof data === "function") {
        fn = data;
        data = null;
    }
    if (data) request_.query(data);
    if (fn) request_.end(fn);
    return request_;
};
/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */ request.options = function(url, data, fn) {
    var request_ = request("OPTIONS", url);
    if (typeof data === "function") {
        fn = data;
        data = null;
    }
    if (data) request_.send(data);
    if (fn) request_.end(fn);
    return request_;
};
/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */ function del(url, data, fn) {
    var request_ = request("DELETE", url);
    if (typeof data === "function") {
        fn = data;
        data = null;
    }
    if (data) request_.send(data);
    if (fn) request_.end(fn);
    return request_;
}
request.del = del;
request.delete = del;
/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */ request.patch = function(url, data, fn) {
    var request_ = request("PATCH", url);
    if (typeof data === "function") {
        fn = data;
        data = null;
    }
    if (data) request_.send(data);
    if (fn) request_.end(fn);
    return request_;
};
/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */ request.post = function(url, data, fn) {
    var request_ = request("POST", url);
    if (typeof data === "function") {
        fn = data;
        data = null;
    }
    if (data) request_.send(data);
    if (fn) request_.end(fn);
    return request_;
};
/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */ request.put = function(url, data, fn) {
    var request_ = request("PUT", url);
    if (typeof data === "function") {
        fn = data;
        data = null;
    }
    if (data) request_.send(data);
    if (fn) request_.end(fn);
    return request_;
};

},{"53e2f1c346255ff9":"hpgjY","5c435e2bc45b4ed9":"d0lZV","ebbe3d0f8d85fa3f":"4Y9hJ","6fce6c5c65240c3c":"kmJ4Y","a105cd64f2836ed6":"hLZHK","73759f0cf2bd611f":"ghLCY","8e302bf23d41e177":"eFRaI"}],"hpgjY":[function(require,module,exports) {
/**
 * Expose `Emitter`.
 */ module.exports = Emitter;
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */ function Emitter(obj) {
    if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */ function mixin(obj) {
    for(var key in Emitter.prototype)obj[key] = Emitter.prototype[key];
    return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
    return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.once = function(event, fn) {
    function on() {
        this.off(event, on);
        fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    // all
    if (0 == arguments.length) {
        this._callbacks = {};
        return this;
    }
    // specific event
    var callbacks = this._callbacks["$" + event];
    if (!callbacks) return this;
    // remove all handlers
    if (1 == arguments.length) {
        delete this._callbacks["$" + event];
        return this;
    }
    // remove specific handler
    var cb;
    for(var i = 0; i < callbacks.length; i++){
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
        }
    }
    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) delete this._callbacks["$" + event];
    return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */ Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
    for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    if (callbacks) {
        callbacks = callbacks.slice(0);
        for(var i = 0, len = callbacks.length; i < len; ++i)callbacks[i].apply(this, args);
    }
    return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */ Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks["$" + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */ Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
};

},{}],"d0lZV":[function(require,module,exports) {
module.exports = stringify;
stringify.default = stringify;
stringify.stable = deterministicStringify;
stringify.stableStringify = deterministicStringify;
var LIMIT_REPLACE_NODE = "[...]";
var CIRCULAR_REPLACE_NODE = "[Circular]";
var arr = [];
var replacerStack = [];
function defaultOptions() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
// Regular stringify
function stringify(obj, replacer, spacer, options) {
    if (typeof options === "undefined") options = defaultOptions();
    decirc(obj, "", 0, [], undefined, 0, options);
    var res;
    try {
        if (replacerStack.length === 0) res = JSON.stringify(obj, replacer, spacer);
        else res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
    } catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally{
        while(arr.length !== 0){
            var part = arr.pop();
            if (part.length === 4) Object.defineProperty(part[0], part[1], part[3]);
            else part[0][part[1]] = part[2];
        }
    }
    return res;
}
function setReplace(replace, val, k, parent) {
    var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
    if (propertyDescriptor.get !== undefined) {
        if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, {
                value: replace
            });
            arr.push([
                parent,
                k,
                val,
                propertyDescriptor
            ]);
        } else replacerStack.push([
            val,
            k,
            replace
        ]);
    } else {
        parent[k] = replace;
        arr.push([
            parent,
            k,
            val
        ]);
    }
}
function decirc(val, k, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i;
    if (typeof val === "object" && val !== null) {
        for(i = 0; i < stack.length; i++)if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        stack.push(val);
        // Optimize for Arrays. Big arrays could kill the performance otherwise!
        if (Array.isArray(val)) for(i = 0; i < val.length; i++)decirc(val[i], i, i, stack, val, depth, options);
        else {
            var keys = Object.keys(val);
            for(i = 0; i < keys.length; i++){
                var key = keys[i];
                decirc(val[key], key, i, stack, val, depth, options);
            }
        }
        stack.pop();
    }
}
// Stable-stringify
function compareFunction(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
function deterministicStringify(obj, replacer, spacer, options) {
    if (typeof options === "undefined") options = defaultOptions();
    var tmp = deterministicDecirc(obj, "", 0, [], undefined, 0, options) || obj;
    var res;
    try {
        if (replacerStack.length === 0) res = JSON.stringify(tmp, replacer, spacer);
        else res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
    } catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally{
        // Ensure that we restore the object as it was.
        while(arr.length !== 0){
            var part = arr.pop();
            if (part.length === 4) Object.defineProperty(part[0], part[1], part[3]);
            else part[0][part[1]] = part[2];
        }
    }
    return res;
}
function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i;
    if (typeof val === "object" && val !== null) {
        for(i = 0; i < stack.length; i++)if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
        }
        try {
            if (typeof val.toJSON === "function") return;
        } catch (_) {
            return;
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        stack.push(val);
        // Optimize for Arrays. Big arrays could kill the performance otherwise!
        if (Array.isArray(val)) for(i = 0; i < val.length; i++)deterministicDecirc(val[i], i, i, stack, val, depth, options);
        else {
            // Create a temporary object in the required way
            var tmp = {};
            var keys = Object.keys(val).sort(compareFunction);
            for(i = 0; i < keys.length; i++){
                var key = keys[i];
                deterministicDecirc(val[key], key, i, stack, val, depth, options);
                tmp[key] = val[key];
            }
            if (typeof parent !== "undefined") {
                arr.push([
                    parent,
                    k,
                    val
                ]);
                parent[k] = tmp;
            } else return tmp;
        }
        stack.pop();
    }
}
// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues(replacer) {
    replacer = typeof replacer !== "undefined" ? replacer : function(k, v) {
        return v;
    };
    return function(key, val) {
        if (replacerStack.length > 0) for(var i = 0; i < replacerStack.length; i++){
            var part = replacerStack[i];
            if (part[1] === key && part[0] === val) {
                val = part[2];
                replacerStack.splice(i, 1);
                break;
            }
        }
        return replacer.call(this, key, val);
    };
}

},{}],"4Y9hJ":[function(require,module,exports) {
"use strict";
var stringify = require("2395629d90713478");
var parse = require("d740fadb0945112c");
var formats = require("d1a1b3da987e1f33");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"2395629d90713478":"fVuQI","d740fadb0945112c":"l11t8","d1a1b3da987e1f33":"64IVL"}],"fVuQI":[function(require,module,exports) {
"use strict";
var getSideChannel = require("f69a904307549ff4");
var utils = require("e5253a94718391cf");
var formats = require("e07306192f1372f7");
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats["default"];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var sentinel = {};
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag){
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
            if (pos === step) throw new RangeError("Cyclic object value");
            else findFlag = true; // Break while
        }
        if (typeof tmpSc.get(sentinel) === "undefined") step = 0;
    }
    if (typeof filter === "function") obj = filter(prefix, obj);
    else if (obj instanceof Date) obj = serializeDate(obj);
    else if (generateArrayPrefix === "comma" && isArray(obj)) obj = utils.maybeMap(obj, function(value) {
        if (value instanceof Date) return serializeDate(value);
        return value;
    });
    if (obj === null) {
        if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
            if (generateArrayPrefix === "comma" && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ",");
                var valuesJoined = "";
                for(var i = 0; i < valuesArray.length; ++i)valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults.encoder, charset, "value", format));
                return [
                    formatter(keyValue) + (commaRoundTrip && isArray(obj) && valuesArray.length === 1 ? "[]" : "") + "=" + valuesJoined
                ];
            }
            return [
                formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))
            ];
        }
        return [
            formatter(prefix) + "=" + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === "undefined") return values;
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray(obj)) // we need to join elements in
    objKeys = [
        {
            value: obj.length > 0 ? obj.join(",") || null : void 0
        }
    ];
    else if (isArray(filter)) objKeys = filter;
    else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + "[]" : prefix;
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) continue;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) return defaults;
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") throw new TypeError("Encoder has to be a function.");
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var format = formats["default"];
    if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) throw new TypeError("Unknown format option provided.");
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === "function" || isArray(opts.filter)) filter = opts.filter;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== "object" || obj === null) return "";
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
    else if (opts && "indices" in opts) arrayFormat = opts.indices ? "indices" : "repeat";
    else arrayFormat = "indices";
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
    if (!objKeys) objKeys = Object.keys(obj);
    if (options.sort) objKeys.sort(options.sort);
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) continue;
        pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
        prefix += "utf8=%26%2310003%3B&";
        else // encodeURIComponent('✓')
        prefix += "utf8=%E2%9C%93&";
    }
    return joined.length > 0 ? prefix + joined : "";
};

},{"f69a904307549ff4":"gqd57","e5253a94718391cf":"4L2b3","e07306192f1372f7":"64IVL"}],"gqd57":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("75b80959b9f8fd8");
var callBound = require("8c3fe1082bd43739");
var inspect = require("9dfb03b8dcd38a8b");
var $TypeError = require("846e0b383ae18fdc");
var $WeakMap = GetIntrinsic("%WeakMap%", true);
var $Map = GetIntrinsic("%Map%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSet = callBound("Map.prototype.set", true);
var $mapHas = callBound("Map.prototype.has", true);
/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list. By doing so, all the recently used nodes can be accessed relatively quickly.
*/ /** @type {import('.').listGetNode} */ var listGetNode = function(list, key) {
    /** @type {typeof list | NonNullable<(typeof list)['next']>} */ var prev = list;
    /** @type {(typeof list)['next']} */ var curr;
    for(; (curr = prev.next) !== null; prev = curr)if (curr.key === key) {
        prev.next = curr.next;
        // eslint-disable-next-line no-extra-parens
        curr.next = /** @type {NonNullable<typeof list.next>} */ list.next;
        list.next = curr; // eslint-disable-line no-param-reassign
        return curr;
    }
};
/** @type {import('.').listGet} */ var listGet = function(objects, key) {
    var node = listGetNode(objects, key);
    return node && node.value;
};
/** @type {import('.').listSet} */ var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) node.value = value;
    else // Prepend the new node to the beginning of the list
    objects.next = /** @type {import('.').ListNode<typeof value>} */ {
        key: key,
        next: objects.next,
        value: value
    };
};
/** @type {import('.').listHas} */ var listHas = function(objects, key) {
    return !!listGetNode(objects, key);
};
/** @type {import('.')} */ module.exports = function getSideChannel() {
    /** @type {WeakMap<object, unknown>} */ var $wm;
    /** @type {Map<object, unknown>} */ var $m;
    /** @type {import('.').RootNode<unknown>} */ var $o;
    /** @type {import('.').Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) return $weakMapGet($wm, key);
            } else if ($Map) {
                if ($m) return $mapGet($m, key);
            } else {
                if ($o) return listGet($o, key);
            }
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) return $weakMapHas($wm, key);
            } else if ($Map) {
                if ($m) return $mapHas($m, key);
            } else {
                if ($o) return listHas($o, key);
            }
            return false;
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if (!$wm) $wm = new $WeakMap();
                $weakMapSet($wm, key, value);
            } else if ($Map) {
                if (!$m) $m = new $Map();
                $mapSet($m, key, value);
            } else {
                if (!$o) // Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
                $o = {
                    key: {},
                    next: null
                };
                listSet($o, key, value);
            }
        }
    };
    return channel;
};

},{"75b80959b9f8fd8":"eS8Qm","8c3fe1082bd43739":"ctqtC","9dfb03b8dcd38a8b":"NdCaN","846e0b383ae18fdc":"9Zb5k"}],"eS8Qm":[function(require,module,exports) {
"use strict";
var undefined;
var $Error = require("38b3017675bbf9f8");
var $EvalError = require("5bfc195c555959c9");
var $RangeError = require("6cd36d48bd8d0676");
var $ReferenceError = require("66fa093e6ea281f5");
var $SyntaxError = require("a9438f80a93bda2a");
var $TypeError = require("fb0dd137d9c1359f");
var $URIError = require("af68762658d0aac0");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({}, "");
} catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require("985c3a82816efdfe")();
var hasProto = require("28743f22c9fce931")();
var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
    return x.__proto__;
} // eslint-disable-line no-proto
 : null);
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    "%AsyncFromSyncIteratorPrototype%": undefined,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    "%EvalError%": $EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    "%JSON%": typeof JSON === "object" ? JSON : undefined,
    "%Map%": typeof Map === "undefined" ? undefined : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
    "%Symbol%": hasSymbols ? Symbol : undefined,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet
};
if (getProto) try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var errorProto = getProto(getProto(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
}
var doEval = function doEval(name) {
    var value;
    if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
        var fn = doEval("%AsyncGeneratorFunction%");
        if (fn) value = fn.prototype;
    } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval("%AsyncGenerator%");
        if (gen && getProto) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
    ],
    "%ArrayPrototype%": [
        "Array",
        "prototype"
    ],
    "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
    ],
    "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
    ],
    "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
    ],
    "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
    ],
    "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
    ],
    "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%BooleanPrototype%": [
        "Boolean",
        "prototype"
    ],
    "%DataViewPrototype%": [
        "DataView",
        "prototype"
    ],
    "%DatePrototype%": [
        "Date",
        "prototype"
    ],
    "%ErrorPrototype%": [
        "Error",
        "prototype"
    ],
    "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
    ],
    "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
    ],
    "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
    ],
    "%FunctionPrototype%": [
        "Function",
        "prototype"
    ],
    "%Generator%": [
        "GeneratorFunction",
        "prototype"
    ],
    "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
    ],
    "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
    ],
    "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
    ],
    "%JSONParse%": [
        "JSON",
        "parse"
    ],
    "%JSONStringify%": [
        "JSON",
        "stringify"
    ],
    "%MapPrototype%": [
        "Map",
        "prototype"
    ],
    "%NumberPrototype%": [
        "Number",
        "prototype"
    ],
    "%ObjectPrototype%": [
        "Object",
        "prototype"
    ],
    "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
    ],
    "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
    ],
    "%PromisePrototype%": [
        "Promise",
        "prototype"
    ],
    "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
    ],
    "%Promise_all%": [
        "Promise",
        "all"
    ],
    "%Promise_reject%": [
        "Promise",
        "reject"
    ],
    "%Promise_resolve%": [
        "Promise",
        "resolve"
    ],
    "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
    ],
    "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
    ],
    "%RegExpPrototype%": [
        "RegExp",
        "prototype"
    ],
    "%SetPrototype%": [
        "Set",
        "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
    ],
    "%StringPrototype%": [
        "String",
        "prototype"
    ],
    "%SymbolPrototype%": [
        "Symbol",
        "prototype"
    ],
    "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
    ],
    "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
    ],
    "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
    ],
    "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
    ],
    "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
    ],
    "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
    ],
    "%URIErrorPrototype%": [
        "URIError",
        "prototype"
    ],
    "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
    ],
    "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
    ]
};
var bind = require("a670103b30eb2cc3");
var hasOwn = require("4b967302fd402c7f");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
        if (part === "constructor" || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"38b3017675bbf9f8":"bw9V5","5bfc195c555959c9":"1zi2D","6cd36d48bd8d0676":"bQAQO","66fa093e6ea281f5":"gVGaQ","a9438f80a93bda2a":"26dFk","fb0dd137d9c1359f":"9Zb5k","af68762658d0aac0":"5kOMT","985c3a82816efdfe":"inS99","28743f22c9fce931":"4lt6E","a670103b30eb2cc3":"6Jauu","4b967302fd402c7f":"aOPdP"}],"bw9V5":[function(require,module,exports) {
"use strict";
/** @type {import('.')} */ module.exports = Error;

},{}],"1zi2D":[function(require,module,exports) {
"use strict";
/** @type {import('./eval')} */ module.exports = EvalError;

},{}],"bQAQO":[function(require,module,exports) {
"use strict";
/** @type {import('./range')} */ module.exports = RangeError;

},{}],"gVGaQ":[function(require,module,exports) {
"use strict";
/** @type {import('./ref')} */ module.exports = ReferenceError;

},{}],"26dFk":[function(require,module,exports) {
"use strict";
/** @type {import('./syntax')} */ module.exports = SyntaxError;

},{}],"9Zb5k":[function(require,module,exports) {
"use strict";
/** @type {import('./type')} */ module.exports = TypeError;

},{}],"5kOMT":[function(require,module,exports) {
"use strict";
/** @type {import('./uri')} */ module.exports = URIError;

},{}],"inS99":[function(require,module,exports) {
"use strict";
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = require("90249d842b17e764");
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") return false;
    if (typeof Symbol !== "function") return false;
    if (typeof origSymbol("foo") !== "symbol") return false;
    if (typeof Symbol("bar") !== "symbol") return false;
    return hasSymbolSham();
};

},{"90249d842b17e764":"gtnaS"}],"gtnaS":[function(require,module,exports) {
"use strict";
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
    if (typeof Symbol.iterator === "symbol") return true;
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") return false;
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"4lt6E":[function(require,module,exports) {
"use strict";
var test = {
    __proto__: null,
    foo: {}
};
var $Object = Object;
/** @type {import('.')} */ module.exports = function hasProto() {
    // @ts-expect-error: TS errors on an inherited property for some reason
    return ({
        __proto__: test
    }).foo === test.foo && !(test instanceof $Object);
};

},{}],"6Jauu":[function(require,module,exports) {
"use strict";
var implementation = require("72979559ec3665fb");
module.exports = Function.prototype.bind || implementation;

},{"72979559ec3665fb":"dZVo5"}],"dZVo5":[function(require,module,exports) {
"use strict";
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = "[object Function]";
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
    for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
    return arr;
};
var joiny = function(arr, joiner) {
    var str = "";
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) str += joiner;
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) return result;
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs[i] = "$" + i;
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"aOPdP":[function(require,module,exports) {
"use strict";
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = require("ba44f650077f675");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);

},{"ba44f650077f675":"6Jauu"}],"ctqtC":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("cc16182d12446442");
var callBind = require("e26baff8aee2ca92");
var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"cc16182d12446442":"eS8Qm","e26baff8aee2ca92":"9Zgfp"}],"9Zgfp":[function(require,module,exports) {
"use strict";
var bind = require("ed2f7b58c8f95ac1");
var GetIntrinsic = require("a58d938e6b586241");
var setFunctionLength = require("9c6b6a3b5a2a53d2");
var $TypeError = require("db57d126cfd937fc");
var $apply = GetIntrinsic("%Function.prototype.apply%");
var $call = GetIntrinsic("%Function.prototype.call%");
var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
var $defineProperty = require("84b9f03a90eb3ad8");
var $max = GetIntrinsic("%Math.max%");
module.exports = function callBind(originalFunction) {
    if (typeof originalFunction !== "function") throw new $TypeError("a function is required");
    var func = $reflectApply(bind, $call, arguments);
    return setFunctionLength(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, "apply", {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"ed2f7b58c8f95ac1":"6Jauu","a58d938e6b586241":"eS8Qm","9c6b6a3b5a2a53d2":"fTR4f","db57d126cfd937fc":"9Zb5k","84b9f03a90eb3ad8":"7Dmmk"}],"fTR4f":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("ecac247080c39b6c");
var define = require("1e70de3a9c8fb950");
var hasDescriptors = require("5c645d3c2992233a")();
var gOPD = require("d19c2f22c810cc77");
var $TypeError = require("133e50fdbf34e384");
var $floor = GetIntrinsic("%Math.floor%");
/** @typedef {(...args: unknown[]) => unknown} Func */ /** @type {<T extends Func = Func>(fn: T, length: number, loose?: boolean) => T} */ module.exports = function setFunctionLength(fn, length) {
    if (typeof fn !== "function") throw new $TypeError("`fn` is not a function");
    if (typeof length !== "number" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) throw new $TypeError("`length` must be a positive 32-bit integer");
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) functionLengthIsConfigurable = false;
        if (desc && !desc.writable) functionLengthIsWritable = false;
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) define(/** @type {Parameters<define>[0]} */ fn, "length", length, true, true);
        else define(/** @type {Parameters<define>[0]} */ fn, "length", length);
    }
    return fn;
};

},{"ecac247080c39b6c":"eS8Qm","1e70de3a9c8fb950":"t6GVl","5c645d3c2992233a":"km3ZS","d19c2f22c810cc77":"i6xzS","133e50fdbf34e384":"9Zb5k"}],"t6GVl":[function(require,module,exports) {
"use strict";
var $defineProperty = require("c815da91728a65bf");
var $SyntaxError = require("e1ce0cb566650a99");
var $TypeError = require("dfb783433766a54a");
var gopd = require("e0f080676ec841e");
/** @type {import('.')} */ module.exports = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== "object" && typeof obj !== "function") throw new $TypeError("`obj` must be an object or a function`");
    if (typeof property !== "string" && typeof property !== "symbol") throw new $TypeError("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] !== "boolean") throw new $TypeError("`loose`, if provided, must be a boolean");
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!gopd && gopd(obj, property);
    if ($defineProperty) $defineProperty(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value: value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
    else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
    obj[property] = value; // eslint-disable-line no-param-reassign
    else throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
};

},{"c815da91728a65bf":"7Dmmk","e1ce0cb566650a99":"26dFk","dfb783433766a54a":"9Zb5k","e0f080676ec841e":"i6xzS"}],"7Dmmk":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("31c48c36e7d7f106");
/** @type {import('.')} */ var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
if ($defineProperty) try {
    $defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = false;
}
module.exports = $defineProperty;

},{"31c48c36e7d7f106":"eS8Qm"}],"i6xzS":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("19e8d9cf85d3858b");
var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) try {
    $gOPD([], "length");
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"19e8d9cf85d3858b":"eS8Qm"}],"km3ZS":[function(require,module,exports) {
"use strict";
var $defineProperty = require("67fd7ff1b024e7ec");
var hasPropertyDescriptors = function hasPropertyDescriptors() {
    return !!$defineProperty;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!$defineProperty) return null;
    try {
        return $defineProperty([], "length", {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = hasPropertyDescriptors;

},{"67fd7ff1b024e7ec":"7Dmmk"}],"NdCaN":[function(require,module,exports) {
var global = arguments[3];
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) return str;
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return $replace.call(str, sepRegex, "$&_");
}
var utilInspect = require("3a98ccf47ecf44fb");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, "quoteStyle") && opts.quoteStyle !== "single" && opts.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") return "undefined";
    if (obj === null) return "null";
    if (typeof obj === "boolean") return obj ? "true" : "false";
    if (typeof obj === "string") return inspectString(obj, opts);
    if (typeof obj === "number") {
        if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") depth = 0;
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray(obj) ? "[Array]" : "[Object]";
    var indent = getIndent(opts, depth);
    if (typeof seen === "undefined") seen = [];
    else if (indexOf(seen, obj) >= 0) return "[Circular]";
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++)s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        s += ">";
        if (obj.childNodes && obj.childNodes.length) s += "...";
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) return "[]";
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
        return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        if (parts.length === 0) return "[" + String(obj) + "]";
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, {
            depth: maxDepth - depth
        });
        else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
    if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
    if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
    if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
    if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
    if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
    if (isString(obj)) return markBoxed(inspect(String(obj)));
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */ if (typeof window !== "undefined" && obj === window) return "{ [object Window] }";
    if (obj === global) return "{ [object globalThis] }";
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) return tag + "{}";
        if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
        return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, "&quot;");
}
function isArray(obj) {
    return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate(obj) {
    return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp(obj) {
    return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
    return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
    return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
    return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
    return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
    if (typeof obj === "symbol") return true;
    if (!obj || typeof obj !== "object" || !symToString) return false;
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) return f.name;
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) return m[1];
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== "object") return false;
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== "object") return false;
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== "object") return false;
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== "object") return false;
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== "object") return false;
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== "object") return false;
    if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) return true;
    return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, "single", opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[n];
    if (x) return "\\" + x;
    return "\\x" + (n < 0x10 ? "0" : "") + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return "Object(" + str + ")";
}
function weakCollectionOf(type) {
    return type + " { ? }";
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], "\n") >= 0) return false;
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") baseIndent = "	";
    else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
    else return null;
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) return "";
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++)xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++)symMap["$" + syms[k]] = syms[k];
    }
    for(var key in obj){
        if (!has(obj, key)) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue; // eslint-disable-line no-restricted-syntax, no-continue
        else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        else xs.push(key + ": " + inspect(obj[key], obj));
    }
    if (typeof gOPS === "function") {
        for(var j = 0; j < syms.length; j++)if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
    }
    return xs;
}

},{"3a98ccf47ecf44fb":"dRgtO"}],"dRgtO":[function(require,module,exports) {
"use strict";

},{}],"4L2b3":[function(require,module,exports) {
"use strict";
var formats = require("9ce2859f1a1d11aa");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i)array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j)if (typeof obj[j] !== "undefined") compacted.push(obj[j]);
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for(var i = 0; i < source.length; ++i)if (typeof source[i] !== "undefined") obj[i] = source[i];
    return obj;
};
var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) return target;
    if (typeof source !== "object") {
        if (isArray(target)) target.push(source);
        else if (target && typeof target === "object") {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
        } else return [
            target,
            source
        ];
        return target;
    }
    if (!target || typeof target !== "object") return [
        target
    ].concat(source);
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === "object" && item && typeof item === "object") target[i] = merge(targetItem, item, options);
                else target.push(item);
            } else target[i] = item;
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) acc[key] = merge(acc[key], value, options);
        else acc[key] = value;
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) return str;
    var string = str;
    if (typeof str === "symbol") string = Symbol.prototype.toString.call(str);
    else if (typeof str !== "string") string = String(str);
    if (charset === "iso-8859-1") return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
    var out = "";
    for(var i = 0; i < string.length; ++i){
        var c = string.charCodeAt(i);
        if (c === 0x2D // -
         || c === 0x2E // .
         || c === 0x5F // _
         || c === 0x7E // ~
         || c >= 0x30 && c <= 0x39 // 0-9
         || c >= 0x41 && c <= 0x5A // a-z
         || c >= 0x61 && c <= 0x7A // A-Z
         || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }
        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }
        if (c < 0x800) {
            out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        i += 1;
        c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
        /* eslint operator-linebreak: [2, "before"] */ out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: "o"
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== "object") return false;
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
    return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1)mapped.push(fn(val[i]));
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{"9ce2859f1a1d11aa":"64IVL"}],"64IVL":[function(require,module,exports) {
"use strict";
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
};
module.exports = {
    "default": Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

},{}],"l11t8":[function(require,module,exports) {
"use strict";
var utils = require("a85d3119c62b65c2");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) return val.split(",");
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = "utf8=%26%2310003%3B"; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = "utf8=%E2%9C%93"; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i)if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) charset = "utf-8";
            else if (parts[i] === isoSentinel) charset = "iso-8859-1";
            skipIndex = i;
            i = parts.length; // The eslint settings do not allow break;
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) continue;
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
            });
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") val = interpretNumericEntities(val);
        if (part.indexOf("[]=") > -1) val = isArray(val) ? [
            val
        ] : val;
        if (has.call(obj, key)) obj[key] = utils.combine(obj[key], val);
        else obj[key] = val;
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) obj = [].concat(leaf);
        else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === "") obj = {
                0: leaf
            };
            else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== "__proto__") obj[cleanRoot] = leaf;
        }
        leaf = obj;
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) return;
    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    // The regex chunks
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    // Get the parent
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    // Stash the parent if it exists
    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) return;
        }
        keys.push(parent);
    }
    // Loop through children appending to the array until we hit depth
    var i = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) return;
        }
        keys.push(segment[1]);
    }
    // If there's a remainder, just add whatever is left
    if (segment) keys.push("[" + key.slice(segment.index) + "]");
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) return defaults;
    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
    return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") return options.plainObjects ? Object.create(null) : {};
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) return obj;
    return utils.compact(obj);
};

},{"a85d3119c62b65c2":"4L2b3"}],"kmJ4Y":[function(require,module,exports) {
var process = require("9fd7a4a8b3785c37");
"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var semver = require("45acd51f345125c7");
/**
 * Module of mixed-in functions shared between node and client code
 */ var _require = require("6d45c67031be0033"), isObject = _require.isObject, hasOwn = _require.hasOwn;
/**
 * Expose `RequestBase`.
 */ module.exports = RequestBase;
/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */ function RequestBase() {}
/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */ RequestBase.prototype.clearTimeout = function() {
    clearTimeout(this._timer);
    clearTimeout(this._responseTimeoutTimer);
    clearTimeout(this._uploadTimeoutTimer);
    delete this._timer;
    delete this._responseTimeoutTimer;
    delete this._uploadTimeoutTimer;
    return this;
};
/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */ RequestBase.prototype.parse = function(fn) {
    this._parser = fn;
    return this;
};
/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */ RequestBase.prototype.responseType = function(value) {
    this._responseType = value;
    return this;
};
/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */ RequestBase.prototype.serialize = function(fn) {
    this._serializer = fn;
    return this;
};
/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 * - upload is the time  since last bit of data was sent or received. This timeout works only if deadline timeout is off
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */ RequestBase.prototype.timeout = function(options) {
    if (!options || _typeof(options) !== "object") {
        this._timeout = options;
        this._responseTimeout = 0;
        this._uploadTimeout = 0;
        return this;
    }
    for(var option in options)if (hasOwn(options, option)) switch(option){
        case "deadline":
            this._timeout = options.deadline;
            break;
        case "response":
            this._responseTimeout = options.response;
            break;
        case "upload":
            this._uploadTimeout = options.upload;
            break;
        default:
            console.warn("Unknown timeout option", option);
    }
    return this;
};
/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */ RequestBase.prototype.retry = function(count, fn) {
    // Default to 1 if no count passed or true
    if (arguments.length === 0 || count === true) count = 1;
    if (count <= 0) count = 0;
    this._maxRetries = count;
    this._retries = 0;
    this._retryCallback = fn;
    return this;
}; //
// NOTE: we do not include ESOCKETTIMEDOUT because that is from `request` package
//       <https://github.com/sindresorhus/got/pull/537>
//
// NOTE: we do not include EADDRINFO because it was removed from libuv in 2014
//       <https://github.com/libuv/libuv/commit/02e1ebd40b807be5af46343ea873331b2ee4e9c1>
//       <https://github.com/request/request/search?q=ESOCKETTIMEDOUT&unscoped_q=ESOCKETTIMEDOUT>
//
//
// TODO: expose these as configurable defaults
//
var ERROR_CODES = new Set([
    "ETIMEDOUT",
    "ECONNRESET",
    "EADDRINUSE",
    "ECONNREFUSED",
    "EPIPE",
    "ENOTFOUND",
    "ENETUNREACH",
    "EAI_AGAIN"
]);
var STATUS_CODES = new Set([
    408,
    413,
    429,
    500,
    502,
    503,
    504,
    521,
    522,
    524
]); // TODO: we would need to make this easily configurable before adding it in (e.g. some might want to add POST)
// const METHODS = new Set(['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE']);
/**
 * Determine if a request should be retried.
 * (Inspired by https://github.com/sindresorhus/got#retry)
 *
 * @param {Error} err an error
 * @param {Response} [res] response
 * @returns {Boolean} if segment should be retried
 */ RequestBase.prototype._shouldRetry = function(error, res) {
    if (!this._maxRetries || this._retries++ >= this._maxRetries) return false;
    if (this._retryCallback) try {
        var override = this._retryCallback(error, res);
        if (override === true) return true;
        if (override === false) return false; // undefined falls back to defaults
    } catch (err) {
        console.error(err);
    }
     // TODO: we would need to make this easily configurable before adding it in (e.g. some might want to add POST)
    /*
  if (
    this.req &&
    this.req.method &&
    !METHODS.has(this.req.method.toUpperCase())
  )
    return false;
  */ if (res && res.status && STATUS_CODES.has(res.status)) return true;
    if (error) {
        if (error.code && ERROR_CODES.has(error.code)) return true; // Superagent timeout
        if (error.timeout && error.code === "ECONNABORTED") return true;
        if (error.crossDomain) return true;
    }
    return false;
};
/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */ RequestBase.prototype._retry = function() {
    this.clearTimeout(); // node
    if (this.req) {
        this.req = null;
        this.req = this.request();
    }
    this._aborted = false;
    this.timedout = false;
    this.timedoutError = null;
    return this._end();
};
/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */ RequestBase.prototype.then = function(resolve, reject) {
    var _this = this;
    if (!this._fullfilledPromise) {
        var self = this;
        if (this._endCalled) console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
        this._fullfilledPromise = new Promise(function(resolve, reject) {
            self.on("abort", function() {
                if (_this._maxRetries && _this._maxRetries > _this._retries) return;
                if (_this.timedout && _this.timedoutError) {
                    reject(_this.timedoutError);
                    return;
                }
                var error = new Error("Aborted");
                error.code = "ABORTED";
                error.status = _this.status;
                error.method = _this.method;
                error.url = _this.url;
                reject(error);
            });
            self.end(function(error, res) {
                if (error) reject(error);
                else resolve(res);
            });
        });
    }
    return this._fullfilledPromise.then(resolve, reject);
};
RequestBase.prototype.catch = function(callback) {
    return this.then(undefined, callback);
};
/**
 * Allow for extension
 */ RequestBase.prototype.use = function(fn) {
    fn(this);
    return this;
};
RequestBase.prototype.ok = function(callback) {
    if (typeof callback !== "function") throw new Error("Callback required");
    this._okCallback = callback;
    return this;
};
RequestBase.prototype._isResponseOK = function(res) {
    if (!res) return false;
    if (this._okCallback) return this._okCallback(res);
    return res.status >= 200 && res.status < 300;
};
/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */ RequestBase.prototype.get = function(field) {
    return this._header[field.toLowerCase()];
};
/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */ RequestBase.prototype.getHeader = RequestBase.prototype.get;
/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */ RequestBase.prototype.set = function(field, value) {
    if (isObject(field)) {
        for(var key in field)if (hasOwn(field, key)) this.set(key, field[key]);
        return this;
    }
    this._header[field.toLowerCase()] = value;
    this.header[field] = value;
    return this;
};
/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field field name
 */ RequestBase.prototype.unset = function(field) {
    delete this._header[field.toLowerCase()];
    delete this.header[field];
    return this;
};
/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name name of field
 * @param {String|Blob|File|Buffer|fs.ReadStream} val value of field
 * @param {String} options extra options, e.g. 'blob'
 * @return {Request} for chaining
 * @api public
 */ RequestBase.prototype.field = function(name, value, options) {
    // name should be either a string or an object.
    if (name === null || undefined === name) throw new Error(".field(name, val) name can not be empty");
    if (this._data) throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
    if (isObject(name)) {
        for(var key in name)if (hasOwn(name, key)) this.field(key, name[key]);
        return this;
    }
    if (Array.isArray(value)) {
        for(var i in value)if (hasOwn(value, i)) this.field(name, value[i]);
        return this;
    } // val should be defined now
    if (value === null || undefined === value) throw new Error(".field(name, val) val can not be empty");
    if (typeof value === "boolean") value = String(value);
     //fix https://github.com/visionmedia/superagent/issues/1680
    if (options) this._getFormData().append(name, value, options);
    else this._getFormData().append(name, value);
    return this;
};
/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request} request
 * @api public
 */ RequestBase.prototype.abort = function() {
    if (this._aborted) return this;
    this._aborted = true;
    if (this.xhr) this.xhr.abort(); // browser
    if (this.req) {
        // Node v13 has major differences in `abort()`
        // https://github.com/nodejs/node/blob/v12.x/lib/internal/streams/end-of-stream.js
        // https://github.com/nodejs/node/blob/v13.x/lib/internal/streams/end-of-stream.js
        // https://github.com/nodejs/node/blob/v14.x/lib/internal/streams/end-of-stream.js
        // (if you run a diff across these you will see the differences)
        //
        // References:
        // <https://github.com/nodejs/node/issues/31630>
        // <https://github.com/visionmedia/superagent/pull/1084/commits/dc18679a7c5ccfc6046d882015e5126888973bc8>
        //
        // Thanks to @shadowgate15 and @niftylettuce
        if (semver.gte(process.version, "v13.0.0") && semver.lt(process.version, "v14.0.0")) // Note that the reason this doesn't work is because in v13 as compared to v14
        // there is no `callback = nop` set in end-of-stream.js above
        throw new Error("Superagent does not work in v13 properly with abort() due to Node.js core changes");
        else if (semver.gte(process.version, "v14.0.0")) // We have to manually set `destroyed` to `true` in order for this to work
        // (see core internals of end-of-stream.js above in v14 branch as compared to v12)
        this.req.destroyed = true;
        this.req.abort(); // node
    }
    this.clearTimeout();
    this.emit("abort");
    return this;
};
RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
    switch(options.type){
        case "basic":
            this.set("Authorization", "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
            break;
        case "auto":
            this.username = user;
            this.password = pass;
            break;
        case "bearer":
            // usage would be .auth(accessToken, { type: 'bearer' })
            this.set("Authorization", "Bearer ".concat(user));
            break;
        default:
            break;
    }
    return this;
};
/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */ RequestBase.prototype.withCredentials = function(on) {
    // This is browser-only functionality. Node side is no-op.
    if (on === undefined) on = true;
    this._withCredentials = on;
    return this;
};
/**
 * Set the max redirects to `n`. Does nothing in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */ RequestBase.prototype.redirects = function(n) {
    this._maxRedirects = n;
    return this;
};
/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n number of bytes
 * @return {Request} for chaining
 */ RequestBase.prototype.maxResponseSize = function(n) {
    if (typeof n !== "number") throw new TypeError("Invalid argument");
    this._maxResponseSize = n;
    return this;
};
/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */ RequestBase.prototype.toJSON = function() {
    return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header
    };
};
/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */ // eslint-disable-next-line complexity
RequestBase.prototype.send = function(data) {
    var isObject_ = isObject(data);
    var type = this._header["content-type"];
    if (this._formData) throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
    if (isObject_ && !this._data) {
        if (Array.isArray(data)) this._data = [];
        else if (!this._isHost(data)) this._data = {};
    } else if (data && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
     // merge
    if (isObject_ && isObject(this._data)) {
        for(var key in data)if (hasOwn(data, key)) this._data[key] = data[key];
    } else if (typeof data === "string") {
        // default to x-www-form-urlencoded
        if (!type) this.type("form");
        type = this._header["content-type"];
        if (type) type = type.toLowerCase().trim();
        if (type === "application/x-www-form-urlencoded") this._data = this._data ? "".concat(this._data, "&").concat(data) : data;
        else this._data = (this._data || "") + data;
    } else this._data = data;
    if (!isObject_ || this._isHost(data)) return this;
     // default to json
    if (!type) this.type("json");
    return this;
};
/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */ RequestBase.prototype.sortQuery = function(sort) {
    // _sort default to true but otherwise can be a function or boolean
    this._sort = typeof sort === "undefined" ? true : sort;
    return this;
};
/**
 * Compose querystring to append to req.url
 *
 * @api private
 */ RequestBase.prototype._finalizeQueryString = function() {
    var query = this._query.join("&");
    if (query) this.url += (this.url.includes("?") ? "&" : "?") + query;
    this._query.length = 0; // Makes the call idempotent
    if (this._sort) {
        var index = this.url.indexOf("?");
        if (index >= 0) {
            var queryArray = this.url.slice(index + 1).split("&");
            if (typeof this._sort === "function") queryArray.sort(this._sort);
            else queryArray.sort();
            this.url = this.url.slice(0, index) + "?" + queryArray.join("&");
        }
    }
}; // For backwards compat only
RequestBase.prototype._appendQueryString = function() {
    console.warn("Unsupported");
};
/**
 * Invoke callback with timeout error.
 *
 * @api private
 */ RequestBase.prototype._timeoutError = function(reason, timeout, errno) {
    if (this._aborted) return;
    var error = new Error("".concat(reason + timeout, "ms exceeded"));
    error.timeout = timeout;
    error.code = "ECONNABORTED";
    error.errno = errno;
    this.timedout = true;
    this.timedoutError = error;
    this.abort();
    this.callback(error);
};
RequestBase.prototype._setTimeouts = function() {
    var self = this; // deadline
    if (this._timeout && !this._timer) this._timer = setTimeout(function() {
        self._timeoutError("Timeout of ", self._timeout, "ETIME");
    }, this._timeout);
     // response timeout
    if (this._responseTimeout && !this._responseTimeoutTimer) this._responseTimeoutTimer = setTimeout(function() {
        self._timeoutError("Response timeout of ", self._responseTimeout, "ETIMEDOUT");
    }, this._responseTimeout);
};

},{"9fd7a4a8b3785c37":"dRgtO","45acd51f345125c7":"dRgtO","6d45c67031be0033":"hLZHK"}],"hLZHK":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */ exports.type = function(string_) {
    return string_.split(/ *; */).shift();
};
/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */ exports.params = function(value) {
    var object = {};
    var _iterator = _createForOfIteratorHelper(value.split(/ *; */)), _step;
    try {
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var string_ = _step.value;
            var parts = string_.split(/ *= */);
            var key = parts.shift();
            var _value = parts.shift();
            if (key && _value) object[key] = _value;
        }
    } catch (err) {
        _iterator.e(err);
    } finally{
        _iterator.f();
    }
    return object;
};
/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */ exports.parseLinks = function(value) {
    var object = {};
    var _iterator2 = _createForOfIteratorHelper(value.split(/ *, */)), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var string_ = _step2.value;
            var parts = string_.split(/ *; */);
            var url = parts[0].slice(1, -1);
            var rel = parts[1].split(/ *= */)[1].slice(1, -1);
            object[rel] = url;
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    return object;
};
/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */ exports.cleanHeader = function(header, changesOrigin) {
    delete header["content-type"];
    delete header["content-length"];
    delete header["transfer-encoding"];
    delete header.host; // secuirty
    if (changesOrigin) {
        delete header.authorization;
        delete header.cookie;
    }
    return header;
};
/**
 * Check if `obj` is an object.
 *
 * @param {Object} object
 * @return {Boolean}
 * @api private
 */ exports.isObject = function(object) {
    return object !== null && _typeof(object) === "object";
};
/**
 * Object.hasOwn fallback/polyfill.
 *
 * @type {(object: object, property: string) => boolean} object
 * @api private
 */ exports.hasOwn = Object.hasOwn || function(object, property) {
    if (object == null) throw new TypeError("Cannot convert undefined or null to object");
    return Object.prototype.hasOwnProperty.call(new Object(object), property);
};
exports.mixin = function(target, source) {
    for(var key in source)if (exports.hasOwn(source, key)) target[key] = source[key];
};

},{}],"ghLCY":[function(require,module,exports) {
"use strict";
/**
 * Module dependencies.
 */ var utils = require("1d1781e85e023553");
/**
 * Expose `ResponseBase`.
 */ module.exports = ResponseBase;
/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */ function ResponseBase() {}
/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */ ResponseBase.prototype.get = function(field) {
    return this.header[field.toLowerCase()];
};
/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */ ResponseBase.prototype._setHeaderProperties = function(header) {
    // TODO: moar!
    // TODO: make this a util
    // content-type
    var ct = header["content-type"] || "";
    this.type = utils.type(ct); // params
    var parameters = utils.params(ct);
    for(var key in parameters)if (Object.prototype.hasOwnProperty.call(parameters, key)) this[key] = parameters[key];
    this.links = {}; // links
    try {
        if (header.link) this.links = utils.parseLinks(header.link);
    } catch (_unused) {}
};
/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */ ResponseBase.prototype._setStatusProperties = function(status) {
    var type = Math.trunc(status / 100); // status / class
    this.statusCode = status;
    this.status = this.statusCode;
    this.statusType = type; // basics
    this.info = type === 1;
    this.ok = type === 2;
    this.redirect = type === 3;
    this.clientError = type === 4;
    this.serverError = type === 5;
    this.error = type === 4 || type === 5 ? this.toError() : false; // sugar
    this.created = status === 201;
    this.accepted = status === 202;
    this.noContent = status === 204;
    this.badRequest = status === 400;
    this.unauthorized = status === 401;
    this.notAcceptable = status === 406;
    this.forbidden = status === 403;
    this.notFound = status === 404;
    this.unprocessableEntity = status === 422;
};

},{"1d1781e85e023553":"hLZHK"}],"eFRaI":[function(require,module,exports) {
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function Agent() {
    this._defaults = [];
}
var _loop = function _loop() {
    var fn = _arr[_i];
    // Default setting for all requests from this agent
    Agent.prototype[fn] = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        this._defaults.push({
            fn: fn,
            args: args
        });
        return this;
    };
};
for(var _i = 0, _arr = [
    "use",
    "on",
    "once",
    "set",
    "query",
    "type",
    "accept",
    "auth",
    "withCredentials",
    "sortQuery",
    "retry",
    "ok",
    "redirects",
    "timeout",
    "buffer",
    "serialize",
    "parse",
    "ca",
    "key",
    "pfx",
    "cert",
    "disableTLSCerts"
]; _i < _arr.length; _i++)_loop();
Agent.prototype._setDefaults = function(request) {
    var _iterator = _createForOfIteratorHelper(this._defaults), _step;
    try {
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var def = _step.value;
            request[def.fn].apply(request, _toConsumableArray(def.args));
        }
    } catch (err) {
        _iterator.e(err);
    } finally{
        _iterator.f();
    }
};
module.exports = Agent;

},{}],"kufxQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stringifyUnknown = exports.getTypedKeys = exports.hasOwnProperty = void 0;
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
exports.hasOwnProperty = hasOwnProperty;
function getTypedKeys(obj) {
    return Object.keys(obj);
}
exports.getTypedKeys = getTypedKeys;
function stringifyUnknown(value) {
    if (value === undefined || value === null) return String(value);
    if (typeof value === "object") return JSON.stringify(value);
    if (typeof value !== "string") return value.toString();
    return value;
}
exports.stringifyUnknown = stringifyUnknown;

},{}],"6F4uK":[function(require,module,exports) {
var Buffer = require("2fd5f8a2ead5c1a5").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOAuthHeader = exports.getBasicAuthHeader = exports.getAuthHeader = exports.extractOAuthSecretsFromHeader = exports.OAuthCredentials = void 0;
var AUTH_TOKENS;
(function(AUTH_TOKENS) {
    AUTH_TOKENS["accessToken"] = "access-token";
})(AUTH_TOKENS || (AUTH_TOKENS = {}));
/**
 * Extracts OAuth secrets from the provided headers.
 *
 * @param headers - The headers containing OAuth secrets inclding access-token.
 * @returns The extracted OAuth secrets.
 */ function extractOAuthSecretsFromHeader(headers) {
    var _a;
    if (!headers) return undefined;
    var accessToken = headers[AUTH_TOKENS.accessToken];
    if (!accessToken) return undefined;
    return _a = {}, _a[AUTH_TOKENS.accessToken] = accessToken, _a;
}
exports.extractOAuthSecretsFromHeader = extractOAuthSecretsFromHeader;
/**
 * Generates an authentication header using the provided token and optional prefix.
 *
 * @param token - The token used for authentication.
 * @param prefix - The prefix to be added before the token (default is 'Bearer').
 * @returns The authentication header.
 * @example
 * ```
 * //Generating a custom prefix token header
 * const token = 'your-custom-token';
 * const customPrefix = 'Custom';
 * const header = getAuthHeader(token, customPrefix);
 * // header will be: { Authorization: 'Custom your-custom-token' }
 *```
 */ function getAuthHeader(token, prefix) {
    if (prefix === void 0) prefix = "Bearer";
    return {
        Authorization: "".concat(prefix, " ").concat(token)
    };
}
exports.getAuthHeader = getAuthHeader;
/**
 * Generates a Basic authentication header using the provided username and password.
 *
 * @param username - The username for authentication.
 * @param password - The password for authentication.
 * @returns The Basic authentication header.
 *
 * @example
 * ```
 * // Generating a Basic authentication header
 * const username = 'yourUsername';
 * const password = 'yourPassword';
 * const basicAuthHeader = getBasicAuthHeader(username, password);
 * console.log(basicAuthHeader);
 * // Output will be: { Authorization: 'Basic base64EncodedString' }
 * ```
 */ function getBasicAuthHeader(username, password) {
    var token = Buffer.from("".concat(username, ":").concat(password)).toString("base64");
    return getAuthHeader(token, "Basic");
}
exports.getBasicAuthHeader = getBasicAuthHeader;
/**
 * Generates an OAuth authentication header based on the provided secrets.
 * If no access token is provided in the secrets, an empty object is returned.
 *
 * @param headers - The headers containing access-token.
 * @returns The authentication header.
 */ function getOAuthHeader(headers) {
    if (!headers) return {};
    var oAuthSecrets = extractOAuthSecretsFromHeader(headers);
    var accessToken = oAuthSecrets === null || oAuthSecrets === void 0 ? void 0 : oAuthSecrets[AUTH_TOKENS.accessToken];
    if (accessToken) return getAuthHeader(accessToken);
    else return {};
}
exports.getOAuthHeader = getOAuthHeader;
/**
 * Represents OAuth credentials. includes only access token
 */ var OAuthCredentials = /** @class */ function() {
    /**
     * Create a new instance of OAuthCredentials.
     *
     * @param headers - The headers containing OAuth secrets. Only `access-token` will be used from the provided headers
     */ function OAuthCredentials(headers) {
        var oAuthSecrets = extractOAuthSecretsFromHeader(headers);
        this.accessToken = oAuthSecrets === null || oAuthSecrets === void 0 ? void 0 : oAuthSecrets[AUTH_TOKENS.accessToken];
    }
    Object.defineProperty(OAuthCredentials.prototype, "authHeader", {
        /**
         * Get the authentication header based on the access token.
         *
         * @returns The authentication header.
         */ get: function() {
            if (this.accessToken) return getAuthHeader(this.accessToken);
            else return {};
        },
        enumerable: false,
        configurable: true
    });
    return OAuthCredentials;
}();
exports.OAuthCredentials = OAuthCredentials;

},{"2fd5f8a2ead5c1a5":"f39Qp"}],"f39Qp":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
var base64 = require("6e334306638a210d");
var ieee754 = require("aada0e3e75066745");
var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = "";
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    var loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = "";
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = "";
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = "0123456789abcdef";
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"6e334306638a210d":"koC3P","aada0e3e75066745":"jdE8V"}],"koC3P":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"jdE8V":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"jwlvN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CallerType = void 0;
var CallerType;
(function(CallerType) {
    CallerType["desktop"] = "desktop";
    CallerType["prep"] = "prep";
    CallerType["vizQLServer"] = "vizqlserver";
    CallerType["backgrounder"] = "backgrounder";
    CallerType["vizportal"] = "vizportal";
    CallerType["dataserver"] = "dataserver";
    CallerType["minerva"] = "minerva";
    // connector ui dev server
    CallerType["appdev"] = "appdev";
    // sfdc
    CallerType["dcf"] = "dcf";
})(CallerType = exports.CallerType || (exports.CallerType = {})); //
 // TString AppConfig::GetProcessName()
 // {
 //     switch (AppConfig::GetInstance().GetServerProcessType())
 //     {
 //         case AppConfigEnums::ServerProcessType::Backgrounder:
 //             return TS("backgrounder");
 //         case AppConfigEnums::ServerProcessType::DataServer:
 //             return TS("dataserver");
 //         case AppConfigEnums::ServerProcessType::VizPortal:
 //             return TS("vizportal");
 //         case AppConfigEnums::ServerProcessType::VizQLServer:
 //             return TS("vizqlserver");
 //         case AppConfigEnums::ServerProcessType::WGServer:
 //             return TS("wgserver");
 //         case AppConfigEnums::ServerProcessType::SiteMaintenance:
 //             return TS("siteimportexport");
 //         case AppConfigEnums::ServerProcessType::Minerva:
 //             return TS("minerva");
 //         default:
 //             return TS("unknown");
 //     }
 // }

},{}],"cZI2L":[function(require,module,exports) {
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isLoggable = exports.getLogSeverity = exports.logLevelValues = exports.LogLevel = void 0;
var LogLevel;
(function(LogLevel) {
    LogLevel["DEBUG"] = "debug";
    LogLevel["TRACE"] = "trace";
    LogLevel["INFO"] = "info";
    LogLevel["WARNING"] = "warning";
    LogLevel["ERROR"] = "error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
exports.logLevelValues = Object.values(LogLevel);
var severityMap = (_a = {}, _a[LogLevel.DEBUG] = 5, _a[LogLevel.TRACE] = 4, _a[LogLevel.INFO] = 3, _a[LogLevel.WARNING] = 2, _a[LogLevel.ERROR] = 1, _a);
function getLogSeverity(level) {
    return severityMap[level];
}
exports.getLogSeverity = getLogSeverity;
function isLoggable(maxSeverity, level) {
    if (maxSeverity === undefined) return true;
    return getLogSeverity(level) <= maxSeverity;
}
exports.isLoggable = isLoggable;

},{}],"4UsOu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidHandlerInput = exports.isFileBasedHandlerInput = void 0;
var taco_file_parser_1 = require("7cf992bf30870e33");
function isFileBasedHandlerInput(input) {
    var _a = input, parser = _a.parser, name = _a.name;
    return typeof name === "string" && (0, taco_file_parser_1.isTacoFileParserName)(parser);
}
exports.isFileBasedHandlerInput = isFileBasedHandlerInput;
function isValidHandlerInput(input) {
    if (input === null || typeof input !== "object") return false;
    var _a = input, fetcher = _a.fetcher, parser = _a.parser;
    if (typeof fetcher !== "string") return false;
    // check if the handlerInput is a FileBased shape
    if (Object.values(taco_file_parser_1.TacoFileParser).includes(parser)) {
        var name_1 = input.name;
        return typeof name_1 === "string";
    }
    return typeof parser === "string";
}
exports.isValidHandlerInput = isValidHandlerInput;

},{"7cf992bf30870e33":"1VyIK"}],"1VyIK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isTacoFileParserName = exports.TacoFileParser = void 0;
// export type TacoFileParserName = typeof TacoFileParser[keyof typeof TacoFileParser]
// Have to hardcode the type because type-doc doesn't resolve the type defined with typeof
exports.TacoFileParser = {
    EXCEL: "taco:excel-file-parser",
    CSV: "taco:csv-file-parser",
    PARQUET: "taco:parquet-file-parser",
    DATA: "taco:data-file-parser"
};
var tacoFileParserNames = Object.values(exports.TacoFileParser);
function isTacoFileParserName(value) {
    return tacoFileParserNames.includes(value);
}
exports.isTacoFileParserName = isTacoFileParserName;

},{}],"8jR8z":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PermissionChecker = void 0;
var PermissionChecker = /** @class */ function() {
    function PermissionChecker() {}
    PermissionChecker.checkApiPermission = function(apiPermission, url, method) {
        var e_1, _a;
        var escapeRegex = function(rulePart) {
            return rulePart.replace(/[.?+^$[\]\\(){}|-]/g, "\\$&");
        };
        var tester = function(url, rule) {
            return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(url);
        };
        try {
            for(var _b = __values(Object.entries(apiPermission)), _c = _b.next(); !_c.done; _c = _b.next()){
                var _d = __read(_c.value, 2), rule = _d[0], methods = _d[1];
                if (tester(url, rule + "*") && (method === "OPTIONS" || methods.includes(method))) return true;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return false;
    };
    return PermissionChecker;
}();
exports.PermissionChecker = PermissionChecker;

},{}],"1EoDs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppLogger = void 0;
var logger_1 = require("1cd8dd4cc1f29f45");
var console_1 = require("31d0a49ef98efe0e");
var http_1 = require("c6caa33fdec1e710");
/**
 * A logger class for logging connector app messages.
 *
 * - Connector code can utilize the static methods directly without requiring explicit initialization.
 * - All logged messages will be displayed in the browser console and written to the connector's log file.
 *
 * @class AppLogger
 */ var AppLogger = /** @class */ function() {
    function AppLogger() {}
    /** @ignore */ AppLogger.init = function(config) {
        if (AppLogger.instance !== undefined) {
            console.warn("Logger has already been initialized! Skipping...");
            return;
        }
        var level = config.level, headers = config.headers, endpoint = config.endpoint;
        AppLogger.instance = new logger_1.Logger({
            level: level,
            writers: [
                new console_1.ConsoleWriter({}),
                new http_1.HttpWriter({
                    endpoint: endpoint,
                    headers: headers,
                    batch: true
                })
            ]
        });
        console.info("App logger is initialized!");
    };
    /**
     * Logs an information message.
     *
     * @example
     * Logger.info('This is an information message.');
     */ AppLogger.info = function(message) {
        if (AppLogger.instance) AppLogger.instance.info(message);
    };
    /**
     * Logs an error message.
     *
     * @example
     * Logger.error('This is an error message.');
     */ AppLogger.error = function(message) {
        if (AppLogger.instance) AppLogger.instance.error(message);
    };
    /**
     * Logs a warning message.
     *
     * @example
     * Logger.warn('This is a warning message.');
     */ AppLogger.warn = function(message) {
        if (AppLogger.instance) AppLogger.instance.warn(message);
    };
    /**
     * Logs a debug message.
     *
     * @example
     * Logger.debug('This is a debug message.');
     */ AppLogger.debug = function(message) {
        if (AppLogger.instance) AppLogger.instance.debug(message);
    };
    /** @ignore */ AppLogger.flush = function() {
        if (AppLogger.instance) AppLogger.instance.flush();
    };
    return AppLogger;
}();
exports.AppLogger = AppLogger;

},{"1cd8dd4cc1f29f45":"8vhwq","31d0a49ef98efe0e":"8jw65","c6caa33fdec1e710":"4BweA"}],"8vhwq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Logger = void 0;
var log_level_1 = require("53b2217759050435");
var default_serializer_1 = require("2890c1a5ffa36cca");
var Logger = /** @class */ function() {
    function Logger(config) {
        var _this = this;
        var _a, _b;
        this.writers = [];
        this.batchableWriters = [];
        this.level = (_a = config.level) !== null && _a !== void 0 ? _a : log_level_1.LogLevel.INFO;
        this.serializer = (_b = config.serializer) !== null && _b !== void 0 ? _b : default_serializer_1.serialize;
        config.writers.forEach(function(writer) {
            _this.addWriter(writer);
        });
    }
    Logger.prototype.addWriter = function(writer) {
        writer.setLoggerLevel(this.level);
        if (isBatchableWriter(writer)) this.batchableWriters.push(writer);
        this.writers.push(writer);
    };
    Logger.prototype.flush = function() {
        // force to flush batchable writers
        this.batchableWriters.forEach(function(writer) {
            return writer.flush();
        });
    };
    Logger.prototype.debug = function(message, options) {
        this.log(message, log_level_1.LogLevel.DEBUG, options);
    };
    Logger.prototype.info = function(message, options) {
        this.log(message, log_level_1.LogLevel.INFO, options);
    };
    Logger.prototype.error = function(message, options) {
        this.log(message, log_level_1.LogLevel.ERROR, options);
    };
    Logger.prototype.warn = function(message, options) {
        this.log(message, log_level_1.LogLevel.WARNING, options);
    };
    Logger.prototype.log = function(message, level, options) {
        var msgString = this.serializer(message);
        this.writers.forEach(function(writer) {
            writer.log(msgString, level, options);
        });
    };
    return Logger;
}();
exports.Logger = Logger;
function isBatchableWriter(writer) {
    return "flush" in writer;
}

},{"53b2217759050435":"cZI2L","2890c1a5ffa36cca":"hL9hK"}],"hL9hK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serialize = void 0;
/**
 * A serializer can be used in any JavaScript environment.
 */ var serialize = function(message) {
    if (Array.isArray(message)) return message.map(function(item) {
        return (0, exports.serialize)(item);
    }).join(", ");
    if (message instanceof Error) return message.toString();
    if (typeof message === "object" && message !== null) return JSON.stringify(message, getCircularReplacer());
    if (typeof message === "string") return message;
    // undefined, null, number, boolean
    return "".concat(message);
};
exports.serialize = serialize;
function getCircularReplacer() {
    var seen = new WeakSet();
    return function(_key, value) {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) return;
            seen.add(value);
        }
        return value;
    };
}

},{}],"8jw65":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConsoleWriter = void 0;
var log_level_1 = require("9a16ad5284fa8541");
var writer_1 = require("bfc0fa20b696aaf7");
var ConsoleWriter = /** @class */ function(_super) {
    __extends(ConsoleWriter, _super);
    function ConsoleWriter(config) {
        return _super.call(this, config) || this;
    }
    ConsoleWriter.prototype.log = function(message, level) {
        if (!this.isLoggable(level)) return;
        switch(level){
            case log_level_1.LogLevel.WARNING:
                console.warn(message);
                break;
            case log_level_1.LogLevel.ERROR:
            case log_level_1.LogLevel.TRACE:
                console.error(message);
                break;
            case log_level_1.LogLevel.DEBUG:
            case log_level_1.LogLevel.INFO:
                console.log(message);
                break;
            default:
                console.log(message);
        }
    };
    return ConsoleWriter;
}(writer_1.Writer);
exports.ConsoleWriter = ConsoleWriter;

},{"9a16ad5284fa8541":"cZI2L","bfc0fa20b696aaf7":"d93pL"}],"d93pL":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BatchableWriter = exports.Writer = void 0;
var log_level_1 = require("51ce87a5dea8f86c");
var Writer = /** @class */ function() {
    function Writer(config) {
        this.severity = getSeverityFromConfig(config);
    }
    Writer.prototype.setLoggerLevel = function(level) {
        this.loggerSeverity = (0, log_level_1.getLogSeverity)(level);
    };
    Writer.prototype.getMaxSeverity = function() {
        return this.severity || this.loggerSeverity;
    };
    Writer.prototype.isLoggable = function(level) {
        return (0, log_level_1.isLoggable)(this.getMaxSeverity(), level);
    };
    return Writer;
}();
exports.Writer = Writer;
var BatchableWriter = /** @class */ function(_super) {
    __extends(BatchableWriter, _super);
    function BatchableWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BatchableWriter;
}(Writer);
exports.BatchableWriter = BatchableWriter;
function getSeverityFromConfig(config) {
    if (config.level) return (0, log_level_1.getLogSeverity)(config.level);
}

},{"51ce87a5dea8f86c":"cZI2L"}],"4BweA":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpWriter = exports.DEFAULT_BATCH_INTERVAL = void 0;
var ajax_1 = require("5023bc16457d8e32");
var writer_1 = require("57e62ad1218e0443");
exports.DEFAULT_BATCH_INTERVAL = 3000;
var HttpWriter = /** @class */ function(_super) {
    __extends(HttpWriter, _super);
    function HttpWriter(config) {
        var _this = this;
        var _a, _b, _c;
        _this = _super.call(this, config) || this;
        _this.logEntryQueue = [];
        _this.batch = (_a = config.batch) !== null && _a !== void 0 ? _a : false;
        _this.endpoint = config.endpoint;
        _this.headers = (_b = config.headers) !== null && _b !== void 0 ? _b : {};
        _this.batchInterval = (_c = config.batchInterval) !== null && _c !== void 0 ? _c : exports.DEFAULT_BATCH_INTERVAL;
        return _this;
    }
    HttpWriter.prototype.log = function(message, level) {
        if (!this.isLoggable(level)) return;
        var logEntry = {
            message: message,
            level: level,
            timestamp: Date.now()
        };
        if (this.batch) this.doBatch(logEntry);
        else this.emitLogs([
            logEntry
        ]);
    };
    HttpWriter.prototype.flush = function() {
        if (this.batchTimeoutId) {
            clearTimeout(this.batchTimeoutId);
            this.batchTimeoutId = undefined;
        }
        var entriesToFlush = this.logEntryQueue.slice();
        this.logEntryQueue = [];
        this.emitLogs(entriesToFlush);
    };
    HttpWriter.prototype.doBatch = function(logEntry) {
        var _this = this;
        this.logEntryQueue.push(logEntry);
        if (this.logEntryQueue.length === 1) // starting timer when the first log is enqueued
        this.batchTimeoutId = setTimeout(function() {
            _this.flush();
        }, this.batchInterval);
    };
    HttpWriter.prototype.emitLogs = function(logs) {
        (0, ajax_1.post)(this.endpoint, logs, {
            headers: this.headers
        }).catch(function(error) {
            console.error("Failed to send logs to server", error);
        });
    };
    return HttpWriter;
}(writer_1.BatchableWriter);
exports.HttpWriter = HttpWriter;

},{"5023bc16457d8e32":"lod56","57e62ad1218e0443":"d93pL"}],"xLBxf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnitsFormat = exports.NumberFormat = exports.GeographicRole = exports.ColumnType = exports.ColumnRole = exports.AggType = exports.DataType = void 0;
/**
 * The data type for a table column.
 */ var DataType;
(function(DataType) {
    DataType["Bool"] = "bool";
    DataType["Date"] = "date";
    DataType["Datetime"] = "datetime";
    DataType["Float"] = "float";
    DataType["Int"] = "int";
    DataType["String"] = "string";
    DataType["Geometry"] = "geometry";
    DataType["Unknown"] = "unknown";
})(DataType = exports.DataType || (exports.DataType = {}));
/**
 * The aggregation type for a table column. It can be assigned as metadata
 * for columns of the int and float dataType.
 * */ var AggType;
(function(AggType) {
    AggType["Avg"] = "avg";
    AggType["Count"] = "count";
    AggType["CountDist"] = "count_dist";
    AggType["Median"] = "median";
    AggType["Sum"] = "sum";
})(AggType = exports.AggType || (exports.AggType = {}));
/**
 * The role for a table column.
 */ var ColumnRole;
(function(ColumnRole) {
    ColumnRole["Dimension"] = "dimension";
    ColumnRole["Measure"] = "measure";
})(ColumnRole = exports.ColumnRole || (exports.ColumnRole = {}));
/**
 * The type for a table column.
 */ var ColumnType;
(function(ColumnType) {
    ColumnType["Continuous"] = "continuous";
    ColumnType["Discrete"] = "discrete";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
/**
 * The geographic role for a table column.
 */ var GeographicRole;
(function(GeographicRole) {
    GeographicRole["AreaCode"] = "area_code";
    /** core-based statistical area / metropolitan statistical area */ GeographicRole["CbsaMsa"] = "cbsa_msa";
    GeographicRole["City"] = "city";
    GeographicRole["CongressionalDistrict"] = "congressional_district";
    GeographicRole["CountryRegion"] = "country_region";
    GeographicRole["County"] = "county";
    GeographicRole["StateProvince"] = "state_province";
    GeographicRole["ZipCodePostcode"] = "zip_code_postcode";
    GeographicRole["Latitude"] = "latitude";
    GeographicRole["Longitude"] = "longitude";
})(GeographicRole = exports.GeographicRole || (exports.GeographicRole = {}));
/**
 * The number format for a table column. It can be assigned as metadata
 * for columns of the int and float dataType.
 * */ var NumberFormat;
(function(NumberFormat) {
    NumberFormat["Number"] = "number";
    NumberFormat["Currency"] = "currency";
    NumberFormat["Scientific"] = "scientific";
    NumberFormat["Percentage"] = "percentage";
})(NumberFormat = exports.NumberFormat || (exports.NumberFormat = {}));
/**
 * The unit format for a table column. It can be assigned as metadata
 * for columns of the int and float dataType.
 * */ var UnitsFormat;
(function(UnitsFormat) {
    UnitsFormat["Thousands"] = "thousands";
    UnitsFormat["Millions"] = "millions";
    UnitsFormat["BillionsEnglish"] = "billions_english";
    UnitsFormat["BillionsStandard"] = "billions_standard";
})(UnitsFormat = exports.UnitsFormat || (exports.UnitsFormat = {}));

},{}],"gAAsd":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["jDVQb"], "jDVQb", "parcelRequire3ceb")

//# sourceMappingURL=index.f85a19ad.js.map
