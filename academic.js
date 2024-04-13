function calculatePerformance() {
    var mathGrade = parseFloat(document.getElementById("mathGrade").value);
    var scienceGrade = parseFloat(document.getElementById("scienceGrade").value);
    var englishGrade = parseFloat(document.getElementById("englishGrade").value);

    if (isNaN(mathGrade) || isNaN(scienceGrade) || isNaN(englishGrade)) {
        alert("Please enter valid grades!");
        return;
    }

    var averageGrade = (mathGrade + scienceGrade + englishGrade) / 3;
    var resultElement = document.getElementById("result");
    var suggestionsElement = document.getElementById("suggestions");

    resultElement.innerHTML = `
        <h3>Your Academic Performance</h3>
        <p>Math Grade: ${mathGrade}</p>
        <p>Science Grade: ${scienceGrade}</p>
        <p>English Grade: ${englishGrade}</p>
        <p>Average Grade: ${averageGrade.toFixed(2)}</p>
    `;

    var gpa = calculateGPA(averageGrade);
    resultElement.innerHTML += "<p>GPA: " + gpa.toFixed(2) + "</p>";

    var suggestions = getPerformanceSuggestions(mathGrade, scienceGrade, englishGrade);
    suggestionsElement.innerHTML = "<h3>Suggestions for Improvement</h3><p>" + suggestions + "</p>";
}

function calculateGPA(averageGrade) {
    // GPA scale: 4.0 for A, 3.0 for B, 2.0 for C, 1.0 for D, 0.0 for F
    if (averageGrade >= 90) {
        return 4.0;
    } else if (averageGrade >= 80) {
        return 3.0;
    } else if (averageGrade >= 70) {
        return 2.0;
    } else if (averageGrade >= 60) {
        return 1.0;
    } else {
        return 0.0;
    }
}

function getPerformanceSuggestions(mathGrade, scienceGrade, englishGrade) {
    var suggestions = "";
    if (mathGrade < 60) {
        suggestions += "Improve math skills. ";
    }
    if (scienceGrade < 60) {
        suggestions += "Study more for science. ";
    }
    if (englishGrade < 60) {
        suggestions += "Read more to improve English. ";
    }
    return suggestions.trim();
}
