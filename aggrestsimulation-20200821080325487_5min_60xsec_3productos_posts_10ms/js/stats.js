var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18001",
        "ok": "18001",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2474",
        "ok": "2474",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "236",
        "ok": "236",
        "ko": "-"
    },
    "percentiles1": {
        "total": "628",
        "ok": "628",
        "ko": "-"
    },
    "percentiles2": {
        "total": "743",
        "ok": "743",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1022",
        "ok": "1022",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1616",
        "ok": "1616",
        "ko": "-"
    },
    "group1": {
    "name": "t < 400 ms",
    "count": 1839,
    "percentage": 10
},
    "group2": {
    "name": "400 ms < t < 800 ms",
    "count": 13126,
    "percentage": 73
},
    "group3": {
    "name": "t > 800 ms",
    "count": 3036,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "57.881",
        "ok": "57.881",
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
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "percentiles2": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "percentiles3": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "percentiles4": {
        "total": "123",
        "ok": "123",
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
        "total": "18000",
        "ok": "18000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2474",
        "ok": "2474",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "236",
        "ok": "236",
        "ko": "-"
    },
    "percentiles1": {
        "total": "628",
        "ok": "628",
        "ko": "-"
    },
    "percentiles2": {
        "total": "743",
        "ok": "743",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1022",
        "ok": "1022",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1616",
        "ok": "1616",
        "ko": "-"
    },
    "group1": {
    "name": "t < 400 ms",
    "count": 1838,
    "percentage": 10
},
    "group2": {
    "name": "400 ms < t < 800 ms",
    "count": 13126,
    "percentage": 73
},
    "group3": {
    "name": "t > 800 ms",
    "count": 3036,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "57.878",
        "ok": "57.878",
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
