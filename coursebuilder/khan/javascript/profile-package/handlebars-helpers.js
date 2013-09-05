Handlebars.registerHelper("encodeURIComponent", function(str) {
    return encodeURIComponent(str);
});

Handlebars.registerHelper("commafy", function(numPoints) {
    // From KhanUtil.commafy in math-format.js
    return numPoints.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
});

/**
 * Convert number of seconds to a time phrase for recent activity video entries.
 * Stolen from templatefilters.py
 */
Handlebars.registerHelper("secondsToTime", function(seconds) {
    // TODO: bring out KhanUtil's plural function
    // or somehow clean up the > 1 ? "s" : "" mess
    var years = Math.floor(seconds / (86400 * 365));
    seconds -= years * (86400 * 365);

    var days = Math.floor(seconds / 86400);
    seconds -= days * 86400;

    var months = Math.floor(days / 30.5);
    var weeks = Math.floor(days / 7);

    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;

    minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    if (years) {
        return years + " jaar" + (years > 1 ? "/jaren" : "");
    } else if (months) {
        return months + " maand" + (months > 1 ? "/maanden" : "");
    } else if (weeks) {
        return weeks + " week" + (weeks > 1 ? "/weken" : "");
    } else if (days) {
        var result = days + " dag" + (days > 1 ? "/dagen" : "");
        if (hours) {
            result += " " + hours + " uur" + (hours > 1 ? "/uren" : "");
        }
        return result;
    } else if (hours) {
        var result = hours + " uur" + (hours > 1 ? "/uren" : "");
        if (minutes) {
            result += minutes + " minuut" + (minutes > 1 ? "/minuten" : "");
        }
    } else if (!minutes && seconds) {
        return seconds + " seconde" + (seconds > 1 ? "n" : "");
    } else {
        return minutes + " minuut" + (minutes > 1 ? "/minuten" : "");
    }
});
Handlebars.registerHelper("questions_string", function(number) {
    return (number==1)? "vraag":"vragen";
});
Handlebars.registerHelper("votes_string", function(number) {
    return (number==1)? "stem verzameld":"stemmen verzameld";
});
Handlebars.registerHelper("answers_string", function(number) {
    return (number==1)? "antwoord":"antwoorden";
});
Handlebars.registerHelper("flags_string", function(number) {
    return (number==1)? "vlag verzameld":"vlaggen verzameld";
});
Handlebars.registerHelper("comments_string", function(number) {
    return (number==1)? "opmerking":"opmerkingen";
});
