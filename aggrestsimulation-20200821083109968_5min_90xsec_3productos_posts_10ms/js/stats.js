var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "27001",
        "ok": "27001",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6721",
        "ok": "6721",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1072",
        "ok": "1072",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "411",
        "ok": "411",
        "ko": "-"
    },
    "percentiles1": {
        "total": "969",
        "ok": "969",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1215",
        "ok": "1215",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1815",
        "ok": "1815",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2467",
        "ok": "2467",
        "ko": "-"
    },
    "group1": {
    "name": "t < 400 ms",
    "count": 53,
    "percentage": 0
},
    "group2": {
    "name": "400 ms < t < 800 ms",
    "count": 6122,
    "percentage": 23
},
    "group3": {
    "name": "t > 800 ms",
    "count": 20826,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.82",
        "ok": "86.82",
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
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "percentiles2": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "percentiles3": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "percentiles4": {
        "total": "76",
        "ok": "76",
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
        "total": "27000",
        "ok": "27000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "156",
        "ok": "156",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6721",
        "ok": "6721",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1072",
        "ok": "1072",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "411",
        "ok": "411",
        "ko": "-"
    },
    "percentiles1": {
        "total": "969",
        "ok": "969",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1215",
        "ok": "1215",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1815",
        "ok": "1815",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2467",
        "ok": "2467",
        "ko": "-"
    },
    "group1": {
    "name": "t < 400 ms",
    "count": 52,
    "percentage": 0
},
    "group2": {
    "name": "400 ms < t < 800 ms",
    "count": 6122,
    "percentage": 23
},
    "group3": {
    "name": "t > 800 ms",
    "count": 20826,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.817",
        "ok": "86.817",
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
