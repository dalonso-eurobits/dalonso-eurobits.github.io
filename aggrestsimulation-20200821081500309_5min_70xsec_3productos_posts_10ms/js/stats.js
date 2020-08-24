var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "21001",
        "ok": "21001",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2294",
        "ok": "2294",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "766",
        "ok": "766",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "254",
        "ok": "254",
        "ko": "-"
    },
    "percentiles1": {
        "total": "720",
        "ok": "720",
        "ko": "-"
    },
    "percentiles2": {
        "total": "862",
        "ok": "862",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1253",
        "ok": "1253",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1644",
        "ok": "1644",
        "ko": "-"
    },
    "group1": {
    "name": "t < 400 ms",
    "count": 879,
    "percentage": 4
},
    "group2": {
    "name": "400 ms < t < 800 ms",
    "count": 13017,
    "percentage": 62
},
    "group3": {
    "name": "t > 800 ms",
    "count": 7105,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "67.527",
        "ok": "67.527",
        "ko": "-"
    }
},
contents: {
"req_login-d56b6": {
        type: "REQUEST",
        name: "login",
path: "login",
pathFormatted: "req_login-d56b6",
stats: {
    "name": "login",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "percentiles2": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "percentiles3": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "percentiles4": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "group1": {
    "name": "t < 400 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "400 ms < t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 800 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.003",
        "ok": "0.003",
        "ko": "-"
    }
}
    },"req_requestaggregat-e2bf6": {
        type: "REQUEST",
        name: "requestAggregation_fintonic_products",
path: "requestAggregation_fintonic_products",
pathFormatted: "req_requestaggregat-e2bf6",
stats: {
    "name": "requestAggregation_fintonic_products",
    "numberOfRequests": {
        "total": "21000",
        "ok": "21000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2294",
        "ok": "2294",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "766",
        "ok": "766",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "254",
        "ok": "254",
        "ko": "-"
    },
    "percentiles1": {
        "total": "720",
        "ok": "720",
        "ko": "-"
    },
    "percentiles2": {
        "total": "862",
        "ok": "862",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1253",
        "ok": "1253",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1644",
        "ok": "1644",
        "ko": "-"
    },
    "group1": {
    "name": "t < 400 ms",
    "count": 878,
    "percentage": 4
},
    "group2": {
    "name": "400 ms < t < 800 ms",
    "count": 13017,
    "percentage": 62
},
    "group3": {
    "name": "t > 800 ms",
    "count": 7105,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "67.524",
        "ok": "67.524",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
