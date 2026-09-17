// app.js - handles data, UI, LocalStorage and draw logic
$(function () {
  const STORAGE_KEY = "class_spinner_data_v1";
  const SAMPLE_FILE = "sample.json";

  const DEFAULT_SAMPLE_DATA = [
    {
      "id": 1,
      "idNumber": "7025241001",
      "name": "Achmad Bisri",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 2,
      "idNumber": "7025241002",
      "name": "Windi Eka Yulia Retnani",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 3,
      "idNumber": "7025241003",
      "name": "Erwin Duadja Betha Sasana",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 4,
      "idNumber": "7025241004",
      "name": "Rony Wijanarko",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 5,
      "idNumber": "7025241005",
      "name": "Doni Setio Pambudi",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 6,
      "idNumber": "7025241006",
      "name": "Agung Mustika Rizki",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 7,
      "idNumber": "7025241007",
      "name": "Januar Adi Putra",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 8,
      "idNumber": "7025241008",
      "name": "Yunita Ardilla",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 9,
      "idNumber": "7025241009",
      "name": "Setiawan Budiman",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 10,
      "idNumber": "7025241010",
      "name": "Iska Yanuartanti",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 11,
      "idNumber": "7025241011",
      "name": "Agus Muliantara",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 12,
      "idNumber": "7025241012",
      "name": "Andy Rachman",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 13,
      "idNumber": "7025242013",
      "name": "Rizqy Ahsana Putri",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 14,
      "idNumber": "7025241014",
      "name": "I Komang Ari Mogi",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 15,
      "idNumber": "7025241015",
      "name": "Ach. Arif Alfin",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 16,
      "idNumber": "7025241016",
      "name": "Dava Aulia",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 17,
      "idNumber": "7025241017",
      "name": "Imam Kuswardayan",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 18,
      "idNumber": "7025241018",
      "name": "Moh. Muzayyin Amrulloh",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 19,
      "idNumber": "7025241019",
      "name": "Edi Junaedi",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 20,
      "idNumber": "7025241020",
      "name": "Amirullah",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    },
    {
      "id": 21,
      "idNumber": "7025241021",
      "name": "Fahmi Syuhada",
      "isPresent": true,
      "isIncluded": true,
      "timesSelected": 0,
      "timesAnswered": 0,
      "timesCorrect": 0
    }
  ];

  function loadSampleToLocal() {
    const d = $.Deferred();
    $.getJSON(SAMPLE_FILE)
      .done(data => {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) { console.warn(e); }
        d.resolve(data);
      })
      .fail(() => {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SAMPLE_DATA)); } catch (e) { console.warn(e); }
        d.resolve(DEFAULT_SAMPLE_DATA);
      });
    return d.promise();
  }

  // Fallback in-memory data cache if localStorage is disabled/fails
  let inMemoryData = null;

  function getData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return inMemoryData;
      try { return JSON.parse(raw); } catch (e) { return inMemoryData; }
    } catch (e) {
      console.warn("localStorage read failed, using in-memory cache:", e);
      return inMemoryData;
    }
  }

  function saveData(data) {
    inMemoryData = data;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("localStorage write failed, data saved in memory only:", e);
    }
  }

  // UI Notification & Confirmation Helpers (Replacing native alert & confirm)
  function showAppToast(message, isError = false) {
    const $toast = $("#appToast");
    const $body = $("#toastMessage");
    $body.text(message);
    if (isError) {
      $toast.removeClass("text-bg-dark text-bg-success").addClass("text-bg-danger");
    } else {
      $toast.removeClass("text-bg-dark text-bg-danger").addClass("text-bg-dark");
    }
    const toast = bootstrap.Toast.getOrCreateInstance($toast[0]);
    toast.show();
  }

  let pendingConfirmCallback = null;
  function showAppConfirm(title, message, onOk) {
    $("#modalConfirmTitle").text(title || "Confirmation");
    $("#modalConfirmBody").text(message || "Are you sure you want to proceed?");
    pendingConfirmCallback = onOk;
    const modal = bootstrap.Modal.getOrCreateInstance($("#modalConfirm")[0]);
    modal.show();
  }

  $("#btnConfirmOk").on("click", function () {
    const modal = bootstrap.Modal.getInstance($("#modalConfirm")[0]);
    if (modal) modal.hide();
    if (typeof pendingConfirmCallback === "function") {
      pendingConfirmCallback();
      pendingConfirmCallback = null;
    }
  });

  function ensureData() {
    let data = getData();
    if (!data || data.length === 0) {
      // Empty state support: show empty table rather than forced sample data
      renderTable([]);
    } else {
      renderTable(data);
    }
  }

  function renderTable(data) {
    const $tableBody = $("#participantTable tbody");
    const $emptyState = $("#emptyState");
    $tableBody.empty();
    
    if (!data || data.length === 0) {
      $emptyState.removeClass("d-none");
      return;
    }
    $emptyState.addClass("d-none");

    data.forEach((row, index) => {
      const tableRow = $("<tr>").attr("data-id", row.id);
      tableRow.append(`<td class="align-middle">${index + 1}</td>`);
      tableRow.append(`<td class="align-middle"><input class="form-control id-number-input" data-field="idNumber" value="${escapeHtml(row.idNumber)}"></td>`);
      tableRow.append(`<td class="align-middle"><input class="form-control name-input" data-field="name" value="${escapeHtml(row.name)}"></td>`);
      tableRow.append(`<td class="text-center align-middle"><input type="checkbox" class="check-present" ${row.isPresent ? "checked" : ""}></td>`);
      tableRow.append(`<td class="text-center align-middle"><input type="checkbox" class="check-included" ${row.isIncluded ? "checked" : ""}></td>`);
      tableRow.append(`<td class="text-center align-middle count-selected">${row.timesSelected}</td>`);
      tableRow.append(`<td class="align-middle"><input type="number" min="0" class="form-control form-control-sm count-answered text-center" value="${row.timesAnswered}"></td>`);
      tableRow.append(`<td class="align-middle"><input type="number" min="0" class="form-control form-control-sm count-correct text-center" value="${row.timesCorrect}"></td>`);
      tableRow.append(`<td class="align-middle text-end"><button class="btn btn-sm btn-outline-danger btn-delete" title="Delete participant"><i class="bi bi-trash-fill"></i></button></td>`);
      $tableBody.append(tableRow);
    });
  }

  function escapeHtml(str) { return (str + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  // update a single field then save
  $("#participantTable").on("change keyup", "input,textarea", function (e) {
    const $currentRow = $(this).closest("tr");
    const rowId = Number($currentRow.attr("data-id"));
    let data = getData() || [];
    const participantRow = data.find(record => record.id === rowId);
    if (!participantRow) return;
    if ($(this).is(":checkbox")) {
      if ($(this).hasClass("check-present")) participantRow.isPresent = $(this).prop("checked");
      if ($(this).hasClass("check-included")) participantRow.isIncluded = $(this).prop("checked");
    } else {
      const fieldName = $(this).data("field");
      if (fieldName) participantRow[fieldName] = $(this).val();
      else if ($(this).hasClass("count-answered")) participantRow.timesAnswered = Number($(this).val()) || 0;
      else if ($(this).hasClass("count-correct")) participantRow.timesCorrect = Number($(this).val()) || 0;
    }
    saveData(data);
  });

  // delete single participant
  $("#participantTable").on("click", ".btn-delete", function () {
    const $currentRow = $(this).closest("tr");
    const rowId = Number($currentRow.attr("data-id"));
    showAppConfirm("Delete Participant", "Are you sure you want to delete this participant from the roster?", () => {
      let data = getData() || [];
      data = data.filter(record => record.id !== rowId);
      saveData(data);
      renderTable(data);
      showAppToast("Participant deleted.");
    });
  });

  // add new participant
  $("#btnAddParticipant").on("click", function () {
    let data = getData() || [];
    const newId = data.length ? Math.max(...data.map(participant => participant.id)) + 1 : 1;
    const newParticipant = {
      id: newId,
      idNumber: "",
      name: "New Student",
      isPresent: true,
      isIncluded: true,
      timesSelected: 0,
      timesAnswered: 0,
      timesCorrect: 0
    };
    data.push(newParticipant);
    saveData(data);
    renderTable(data);
    setTimeout(() => { $(`#participantTable tbody tr[data-id='${newId}'] .name-input`).focus(); }, 50);
  });

  // load sample data action
  function handleLoadSample() {
    loadSampleToLocal().then(loadedData => {
      renderTable(loadedData);
      showAppToast("Sample roster loaded successfully.");
    });
  }

  $("#btnResetData").on("click", function () {
    showAppConfirm("Reset Roster", "Resetting the data will overwrite current participants with sample.json. Do you wish to continue?", () => {
      handleLoadSample();
    });
  });

  $("#btnEmptyLoadSample").on("click", function () {
    handleLoadSample();
  });

  // clear all participants
  $("#btnClearAll").on("click", function () {
    showAppConfirm("Clear All Participants", "Are you sure you want to clear the entire participant roster? This cannot be undone.", () => {
      inMemoryData = [];
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {
        console.warn("localStorage clear failed:", e);
      }
      renderTable([]);
      showAppToast("Participant roster cleared.");
    });
  });

  async function exportCSV() {
    const data = getData() || [];
    if (data.length === 0) {
      showAppToast("No participant data to export.", true);
      return;
    }
    const headers = ["id", "idNumber", "name", "isPresent", "isIncluded", "timesSelected", "timesAnswered", "timesCorrect"];
    const rows = data.map(participant => headers.map(header => {
      let value = participant[header];
      if (typeof value === "boolean") value = value ? "1" : "0";
      return `"${String(value).replace(/"/g, '""')}"`;
    }).join(","));
    const csvContent = [headers.join(","), ...rows].join("\n");

    if (window.showSaveFilePicker) {
      try {
        const fileHandle = await window.showSaveFilePicker({
          suggestedName: "participants.csv",
          types: [{
            description: "CSV Files",
            accept: { "text/csv": [".csv"] }
          }]
        });

        const writable = await fileHandle.createWritable();
        await writable.write(csvContent);
        await writable.close();

        showAppToast("CSV file successfully saved!");
      } catch (errorMessage) {
        if (errorMessage.name !== "AbortError") {
          console.log("File save error:", errorMessage);
        }
      }
    } else {
      try {
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "participants.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        showAppToast("CSV file exported successfully.");
      } catch (errorMessage) {
        console.error("Download fallback failed:", errorMessage);
        showAppToast("Failed to export CSV: " + errorMessage.message, true);
      }
    }
  }

  // Export CSV
  $("#btnExportCSV").on("click", function () {
    exportCSV();
  });

  // Import CSV with Overwrite Warning
  $("#fileImport").on("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const currentData = getData() || [];

    const proceedImport = () => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const fileText = event.target.result;
        try {
          const parsedData = parseCSV(fileText);
          if (parsedData.length) {
            const data = parsedData.map((record, index) => ({
              id: Number(record.id) || (index + 1),
              idNumber: record.idNumber || "",
              name: record.name || "",
              isPresent: record.isPresent === "1" || record.isPresent === "true" || record.isPresent === true,
              isIncluded: record.isIncluded === "1" || record.isIncluded === "true" || record.isIncluded === true,
              timesSelected: Number(record.timesSelected) || 0,
              timesAnswered: Number(record.timesAnswered) || 0,
              timesCorrect: Number(record.timesCorrect) || 0
            }));
            saveData(data);
            renderTable(data);
            showAppToast(`Successfully imported ${data.length} participants.`);
          } else {
            showAppToast("Imported CSV file contained no records.", true);
          }
        } catch (errorMessage) {
          showAppToast("Failed to import CSV: " + errorMessage.message, true);
        }
      };
      reader.readAsText(file, "UTF-8");
      $("#fileImport").val("");
    };

    if (currentData.length > 0) {
      showAppConfirm(
        "Warning: Replace Current Roster?",
        `Importing this CSV file will replace all ${currentData.length} currently loaded participants. Do you wish to continue?`,
        proceedImport
      );
    } else {
      proceedImport();
    }
  });

  // parse simple CSV into array of objects (assumes header row)
  function parseCSV(text) {
    const lines = text.split(/\r?\n/).filter(line => line.trim() !== "");
    if (lines.length === 0) return [];
    const headerRow = splitCSVLine(lines[0]);
    const resultArray = [];
    for (let lineIndex = 1; lineIndex < lines.length; lineIndex++) {
      const parts = splitCSVLine(lines[lineIndex]);
      const record = {};
      for (let columnIndex = 0; columnIndex < headerRow.length; columnIndex++) {
        record[headerRow[columnIndex].trim()] = parts[columnIndex] !== undefined ? parts[columnIndex] : "";
      }
      resultArray.push(record);
    }
    return resultArray;
  }

  function splitCSVLine(line) {
    const result = [];
    let current = "", inQuotes = false;
    for (let charIndex = 0; charIndex < line.length; charIndex++) {
      const char = line[charIndex];
      if (char === '"') {
        if (inQuotes && line[charIndex + 1] === '"') { current += '"'; charIndex++; continue; }
        inQuotes = !inQuotes; continue;
      }
      if (char === ',' && !inQuotes) { result.push(current); current = ""; continue; }
      current += char;
    }
    result.push(current);
    return result;
  }

  // btnResetSelection: set isIncluded = isPresent for all rows
  $("#btnResetSelection").on("click", function () {
    const data = getData() || [];
    data.forEach(participant => participant.isIncluded = !!participant.isPresent);
    saveData(data);
    renderTable(data);
    showAppToast("Selection eligibility reset for all present students.");
  });

  // ==========================================
  // Procedural Web Audio Synthesis Module
  // Synthesizes mechanical clicks & fanfare chords via Web Audio API (Zero external audio files)
  // ==========================================
  const AUDIO_STORAGE_KEY = "class_spinner_audio_muted";
  let audioCtx = null;
  let isAudioMuted = false;
  try {
    isAudioMuted = localStorage.getItem(AUDIO_STORAGE_KEY) === "true";
  } catch (e) {
    isAudioMuted = false;
  }

  function getAudioContext() {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        audioCtx = new AudioCtxClass();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTickSound() {
    if (isAudioMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      const now = ctx.currentTime;
      // Rapid pitch drop simulates crisp mechanical reel click
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.035);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.035);
    } catch (e) {
      console.warn("Procedural tick sound error:", e);
    }
  }

  function playFanfareSound() {
    if (isAudioMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      // Arpeggiated victory chord: C5 (523.25Hz), E5 (659.25Hz), G5 (783.99Hz), C6 (1046.50Hz)
      const chordNotes = [523.25, 659.25, 783.99, 1046.50];
      const noteDelay = 0.10;
      const noteDuration = 0.32;
      const baseTime = ctx.currentTime;

      chordNotes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = baseTime + (idx * noteDelay);
        const duration = (idx === chordNotes.length - 1) ? 0.55 : noteDuration;

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.18, startTime + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration);
      });
    } catch (e) {
      console.warn("Procedural fanfare sound error:", e);
    }
  }

  function updateAudioToggleUI() {
    const $btn = $("#btnToggleAudio");
    const $icon = $("#iconAudio");
    const $text = $("#textAudio");
    if (!$btn.length) return;
    if (isAudioMuted) {
      $btn.removeClass("btn-outline-primary").addClass("btn-outline-secondary");
      $icon.removeClass("bi-volume-up-fill").addClass("bi-volume-mute-fill");
      $text.text("Muted");
      $btn.attr("title", "Audio is muted (click to enable)");
    } else {
      $btn.removeClass("btn-outline-secondary").addClass("btn-outline-primary");
      $icon.removeClass("bi-volume-mute-fill").addClass("bi-volume-up-fill");
      $text.text("Sound ON");
      $btn.attr("title", "Audio is enabled (click to mute)");
    }
  }

  $("#btnToggleAudio").on("click", function () {
    isAudioMuted = !isAudioMuted;
    try {
      localStorage.setItem(AUDIO_STORAGE_KEY, isAudioMuted ? "true" : "false");
    } catch (e) {}
    updateAudioToggleUI();
    if (!isAudioMuted) {
      getAudioContext();
      playTickSound();
    }
    showAppToast(isAudioMuted ? "Audio feedback muted." : "Audio feedback enabled.");
  });

  // Draw/Lottery logic
  $("#btnStartDraw").on("click", function () {
    const data = getData() || [];
    const eligibleCandidates = data.filter(participant => participant.isIncluded && participant.isPresent);
    if (eligibleCandidates.length === 0) {
      showAppToast("No eligible participants available. Click 'Reset Inclusion' to start a new round.", true);
      return;
    }

    // Unlock / resume Web Audio context on user draw gesture
    getAudioContext();

    // show slot modal
    $("#modalSlot").modal("show");
    const slotElements = [$("#slot1"), $("#slot2"), $("#slot3")];
    const namePool = eligibleCandidates.map(candidate => candidate.name || candidate.idNumber);
    let animationIntervals = [];
    slotElements.forEach((element, slotIndex) => {
      animationIntervals[slotIndex] = setInterval(() => {
        const randomName = namePool[Math.floor(Math.random() * namePool.length)];
        element.text(randomName);
        if (slotIndex === 1) {
          playTickSound();
        }
      }, 80 + slotIndex * 20);
    });

    setTimeout(() => {
      let winnerIndex;
      if (window.crypto && window.crypto.getRandomValues) {
        const cryptoArray = new Uint32Array(1);
        window.crypto.getRandomValues(cryptoArray);
        winnerIndex = cryptoArray[0] % eligibleCandidates.length;
      } else {
        winnerIndex = Math.floor(Math.random() * eligibleCandidates.length);
      }
      const winnerParticipant = eligibleCandidates[winnerIndex];

      animationIntervals.forEach(interval => clearInterval(interval));

      const len = eligibleCandidates.length;
      const topName = eligibleCandidates[(winnerIndex - 1 + len) % len].name;
      const bottomName = eligibleCandidates[(winnerIndex + 1) % len].name;

      $("#slot1").text(topName).removeClass("slot-winner").css("opacity", "0.5");
      $("#slot2").text(winnerParticipant.name).addClass("slot-winner").css("opacity", "1");
      $("#slot3").text(bottomName).removeClass("slot-winner").css("opacity", "0.5");
      $("#slotResult").text(`Selected: ${winnerParticipant.name} (${winnerParticipant.idNumber})`);

      // Play procedural victory fanfare
      playFanfareSound();

      const fullData = getData() || [];
      const selectedRow = fullData.find(record => record.id === winnerParticipant.id);
      if (selectedRow) {
        selectedRow.timesSelected = Number(selectedRow.timesSelected || 0) + 1;
        selectedRow.isIncluded = false;
        saveData(fullData);
        renderTable(fullData);

        const $selectedRow = $(`#participantTable tbody tr[data-id='${winnerParticipant.id}']`);
        if ($selectedRow.length) {
          $selectedRow[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
          $selectedRow.find("td").addClass("highlight-selected");
          setTimeout(() => $selectedRow.find("td").removeClass("highlight-selected"), 4000);
        }
      }
    }, 2200);
  });

  // Keyboard navigation support: Space or Enter hotkey to trigger spin when not in an input
  $(document).on("keydown", function (e) {
    if ((e.code === "Space" || e.key === " ") && !$(e.target).is("input, textarea, select, button")) {
      e.preventDefault();
      $("#btnStartDraw").click();
    }
  });

  // when modal hides, clear texts and styles
  $("#modalSlot").on("hidden.bs.modal", function () {
    $("#slot1,#slot2,#slot3,#slotResult").text("");
    $("#slot1, #slot2, #slot3").removeClass("slot-winner").css("opacity", "");
  });

  // initial load
  updateAudioToggleUI();
  ensureData();
});