//window.onload=document.getElementById("result-wrapperr").style.display = "none";
var output_names = ['scen', 'vendor_rate_avg', 'vendor_rate_dev', 'avg_inbound_time', 'std_dev_lead_time', 'rev_per', 'inv_cary_cost', 'pur_cost', 'cross_dock', 'warehouse', 'avg_wkly_dem', 'std_dev_demm', 'des_cycle_service', 'sale_price', 'out_of_stock'];
//input names
var input_names = new Array();
input_names['scen'] = "Scenarios";
input_names['vendor_rate_avg'] = "Vendor Fill Rate Avg";
input_names['vendor_rate_dev'] = "Vendor Fill Rate Std Dev";
input_names['avg_inbound_time'] = "Average Inbound Lead Time";
input_names['std_dev_lead_time'] = "Std Dev of Inbound Lead Time";
input_names['rev_per'] = "Review Periods (weeks)";
input_names['inv_cary_cost'] = "Inventory Carrying Cost";
input_names['pur_cost'] = "Purchase Cost";
input_names['avg_wkly_dem'] = "Avg Wkly Demand";
input_names['std_dev_demm'] = "Std Dev of Demand";
input_names['des_cycle_service'] = "Desired Cycle Service Level";
input_names['sale_price'] = "Sale Price";
input_names['out_of_stock'] = "% of Out of stocks Resulting in Lost Sales";
var form_vals = new Array();
form_vals = ['avg_cycle_stock',
  'avg_safe_stock',
  'avg_inven_buff',
  'approx_fill_rate',
  'exp_lost_profit'];
var error_names = new Array();
var error_names2 = new Array;

function error_msg1() {
  error_names['scen'] = "no";
  error_names['vendor_rate_avg'] = "no";
  error_names['vendor_rate_dev'] = "no";
  error_names['avg_inbound_time'] = "no";
  error_names['std_dev_lead_time'] = "no";
  error_names['rev_per'] = "no";
  error_names['inv_cary_cost'] = "no";
  error_names['pur_cost'] = "no";
  error_names['avg_wkly_dem'] = "no";
  error_names['std_dev_demm'] = "no";
  error_names['des_cycle_service'] = "no";
  error_names['sale_price'] = "no";
  error_names['out_of_stock'] = "no";
}
function error_msg2() {
  error_names2['scen'] = "no";
  error_names2['vendor_rate_avg'] = "no";
  error_names2['vendor_rate_dev'] = "no";
  error_names2['avg_inbound_time'] = "no";
  error_names2['std_dev_lead_time'] = "no";
  error_names2['rev_per'] = "no";
  error_names2['inv_cary_cost'] = "no";
  error_names2['pur_cost'] = "no";
  error_names2['avg_wkly_dem'] = "no";
  error_names2['std_dev_demm'] = "no";
  error_names2['des_cycle_service'] = "no";
  error_names2['sale_price'] = "no";
  error_names2['out_of_stock'] = "no";
}

var required_arr = [];
var invalid_arr = {};
var profile = {};
var form_data_json = {};
//function for clearing error span box
function clear_error(id) {
  var err_id = id.replace(/_[1-9]/, '');
  document.getElementById(id).style.border = "";
  //document.getElementById(err_id + '_err').style.display = "none";
  //document.getElementById(err_id + '_err_n').style.display = "none";
}
//fuction for clearing form data
function clear_form(val) {
  require(["dojo/query", "dojo/NodeList-dom"], function(query) {
    query(".scen_class_" + val).forEach(function(node) {
      node.value = "";

    })
  });
}
// output form data 
function form_data() {

  var data = {
    "avg_cycle_stock": [436.68, 405.84, 375.00, 375.00, 375.00],
    "avg_safe_stock": [1850.46, 1660.84, 1510.89, 1379.25, 1068.36],
    "avg_inven_buff": [2287.14, 2066.68, 1885.89, 1754.25, 1443.36],
    "approx_fill_rate": [96.8, 97.2, 97.4, 97.6, 98.2],
    "exp_lost_profit": [25.32, 22.73, 20.67, 18.87, 14.62],
    "avg_cycle_stock_d": [337.50, 356.25, 375.00, 375.00, 375.00],
    "avg_safe_stock_d": [1241.33, 1310.29, 1379.25, 1379.25, 1068.36],
    "avg_inven_buff_d": [1578.83, 1666.54, 1754.25, 1754.25, 1443.36],
    "approx_fill_rate_d": [88.2, 93.3, 96.4, 97.6, 98.2],
    "exp_lost_profit_d": [94.44, 53.31, 28.71, 18.87, 14.62]
  };
  return data;
}
function profile_data() {
  require(["dojox/validate/web", "dojox/validate/us", "dojox/validate/check"],
          function(validate) {
            profile = {
              //required validation
              required: required_arr,
              //valid validations
              constraints: {
                vendor_rate_avg_1: [validate.isInRange, {min: 0, max: 100}],
                vendor_rate_avg_2: [validate.isInRange, {min: 0, max: 100}],
                vendor_rate_avg_3: [validate.isInRange, {min: 0, max: 100}],
                vendor_rate_avg_4: [validate.isInRange, {min: 0, max: 100}],
                vendor_rate_avg_5: [validate.isInRange, {min: 0, max: 100}],
                //
                vendor_rate_dev_1: [validate.isInRange, {min: 0, max: 100}],
                vendor_rate_dev_2: [validate.isInRange, {min: 0, max: 100}],
                vendor_rate_dev_3: [validate.isInRange, {min: 0, max: 100}],
                vendor_rate_dev_4: [validate.isInRange, {min: 0, max: 100}],
                vendor_rate_dev_5: [validate.isInRange, {min: 0, max: 100}],
                //
                inv_cary_cost_1: [validate.isInRange, {min: 0, max: 100}],
                inv_cary_cost_2: [validate.isInRange, {min: 0, max: 100}],
                inv_cary_cost_3: [validate.isInRange, {min: 0, max: 100}],
                inv_cary_cost_4: [validate.isInRange, {min: 0, max: 100}],
                inv_cary_cost_5: [validate.isInRange, {min: 0, max: 100}],
                //
                des_cycle_service_1: [validate.isInRange, {min: 0, max: 100}],
                des_cycle_service_2: [validate.isInRange, {min: 0, max: 100}],
                des_cycle_service_3: [validate.isInRange, {min: 0, max: 100}],
                des_cycle_service_4: [validate.isInRange, {min: 0, max: 100}],
                des_cycle_service_5: [validate.isInRange, {min: 0, max: 100}],
                //
                out_of_stock_1: [validate.isInRange, {min: 0, max: 100}],
                out_of_stock_2: [validate.isInRange, {min: 0, max: 100}],
                out_of_stock_3: [validate.isInRange, {min: 0, max: 100}],
                out_of_stock_4: [validate.isInRange, {min: 0, max: 100}],
                out_of_stock_5: [validate.isInRange, {min: 0, max: 100}],
                //
                avg_inbound_time_1: [validate.isInRange],
                avg_inbound_time_2: [validate.isInRange],
                avg_inbound_time_3: [validate.isInRange],
                avg_inbound_time_4: [validate.isInRange],
                avg_inbound_time_5: [validate.isInRange],
                //
                std_dev_lead_time_1: [validate.isInRange],
                std_dev_lead_time_2: [validate.isInRange],
                std_dev_lead_time_3: [validate.isInRange],
                std_dev_lead_time_4: [validate.isInRange],
                std_dev_lead_time_5: [validate.isInRange],
                //
                rev_per_1: [validate.isInRange],
                rev_per_2: [validate.isInRange],
                rev_per_3: [validate.isInRange],
                rev_per_4: [validate.isInRange],
                rev_per_5: [validate.isInRange],
                //
                pur_cost_1: [validate.isInRange],
                pur_cost_2: [validate.isInRange],
                pur_cost_3: [validate.isInRange],
                pur_cost_4: [validate.isInRange],
                pur_cost_5: [validate.isInRange],
                //
                avg_wkly_dem_1: [validate.isInRange],
                avg_wkly_dem_2: [validate.isInRange],
                avg_wkly_dem_3: [validate.isInRange],
                avg_wkly_dem_4: [validate.isInRange],
                avg_wkly_dem_5: [validate.isInRange],
                //
                std_dev_demm_1: [validate.isInRange],
                std_dev_demm_2: [validate.isInRange],
                std_dev_demm_3: [validate.isInRange],
                std_dev_demm_4: [validate.isInRange],
                std_dev_demm_5: [validate.isInRange],
                //
                sale_price_1: [validate.isInRange],
                sale_price_2: [validate.isInRange],
                sale_price_3: [validate.isInRange],
                sale_price_4: [validate.isInRange],
                sale_price_5: [validate.isInRange]
                        //
              },
              confirm: {
              }
            };
          });
}
//fetching form json data

//dojo form validation script start from here
require(["dojo/dom", "dojo/_base/array", "dojo/_base/event", "dojo/query", "dojox/validate/web", "dojox/validate/us", "dojox/validate/check", "dojo/domReady!", "dojo/NodeList-dom"],
        function(dom, arrayUtil, baseEvent, query, validate) {
          //fetching form data

          form_data_json = form_data();



          function doCheck(form) {
            var ignore_val = [];
            //setting required_arr array based upon scenarios
            for (i = 1; i <= 5; i++) {
              ignore_val = [];
              //current_scen = document.getElementById("scen_" + i).value;
              query(".scen_class_" + i).forEach(function(node) {
                if (node.value == "") {
                  ignore_val.push('true');

                }


              })
              //console.log(ignore_val.length); 
              if (ignore_val.length !== 13) {


                for (j = 0; j < output_names.length; j++)
                  required_arr.push(output_names[j] + '_' + i);

              }
            }
            //console.log(required_arr);
            //
            if (required_arr.length == 0) {
              alert("You need to completely specify at least one scenario!");
              document.getElementById("result_table").style.display = "none";
              return false;
            }
            profile_data();
            var results = validate.check(form, profile),
                    r = dom.byId("result");
            r1 = dom.byId("result_table");

            if (results.isSuccessful()) {
              //empty required fields array after submit
              required_arr = [];
              document.getElementById("result_table").style.display = "block";
              document.getElementById("graph").style.display = "block";
              //printing form data on success
              r.innerHTML = '';

              //alert('Data successfully submitted without Errors.');
              //updating form data based upon json data
              for (i = 1; i <= 5; i++) {
                k = i - 1;
                for (j = 0; j < form_vals.length; j++) {
                  //console.log(form_data_json[form_vals[j]][j]);
                  value1 = document.getElementById(form_vals[j] + '_' + i).value;
                  value2 = document.getElementById(form_vals[j] + '_d_' + i).value;
                 
                  if (value1.indexOf('$') != -1)
                  {

                    document.getElementById(form_vals[j] + '_' + i).value = '$ ' + form_data_json[form_vals[j]][k];


                  }
                  else
                  {
                    document.getElementById(form_vals[j] + '_' + i).value = form_data_json[form_vals[j]][k] + ' %';


                  }
                  if (value2.indexOf('$') != -1)
                  {

                    document.getElementById(form_vals[j] + '_d_' + i).value = '$ ' + form_data_json[form_vals[j] + '_d'][k];

                  }
                  else
                  {


                    document.getElementById(form_vals[j] + '_d_' + i).value = form_data_json[form_vals[j] + '_d'][k] + ' %';
                  }

                }
              }
            } else {
              //empty required fields array after submit
              required_arr = [];
              document.getElementById("result_table").style.display = "none";
              document.getElementById("graph").style.display = "none";
              var s = "<h2>Form results</h2><div id='result'>";
              //get missing files
              var missing = results.getMissing();
              if (missing.length) {
                error_msg1()
                s += '<h4>The following fields are missing:</h4>'
                        + '<ol>';
                arrayUtil.forEach(missing, function(field) {
                  var err_field = field.replace(/_[1-9]/, '');

                  //alert();
                  document.getElementById(field).setAttribute("onkeydown", "clear_error(this.id);");
                  dom.byId(field).style.border = "1px solid red";
                  //dom.byId(err_field + '_err_n').style.display = "inline-block";

                  if (error_names[err_field] === 'no') {
                    error_names[err_field] = input_names[err_field];
                    s += '<li>' + error_names[err_field] + '</li>';


                  }
                });
                error_msg1()
                s += '</ol>';
              }
              //get invalid input names
              var invalid = results.getInvalid();
              // alert(invalid);
              if (invalid.length) {
                error_msg2()
                s += '<h4>The following fields are invalid:</h4>'
                        + '<ol>';
                arrayUtil.forEach(invalid, function(field) {
                  //alert(field);
                  var err_field = field.replace(/_[1-9]/, '');
                  //invalid span box displaying
                  document.getElementById(field).setAttribute("onkeydown", "clear_error(this.id);");
                  dom.byId(field).style.border = "1px solid red";
                  // dom.byId(err_field + '_err').style.display = "inline-block";

                  if (error_names2[err_field] == 'no') {
                    error_names2[err_field] = input_names[err_field];
                    s += '<li>' + error_names2[err_field] + '</li>';


                  }
                });
                error_msg2()
                s += '</ol>';
              }
              s += '</ol></div>';
              r.innerHTML = s;
            }
          }

          //	wait until after our requires are actually loaded.


          //	set up the form handler.
          var f = query("form")[0];
          f.onsubmit = function(e) {
            baseEvent.stop(e);
            doCheck(f);
          };
        });