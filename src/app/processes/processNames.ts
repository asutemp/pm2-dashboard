export interface Processes {
    pid: number;
    name: string;
    pm2_env:
        { exit_code: number;
        script: string;
        prev_restart_delay: number;
        node_version: string;
        versioning: null;
        version: string;
        _pm2_version: string;
        unstable_restarts: number;
        restart_time: number;
        pm_id: number;
        created_at: number;
        axm_dynamic: {}
        axm_options:
        { error: boolean;
            heapdump: boolean;
            'feature.profiler.heapsnapshot': boolean;
            'feature.profiler.heapsampling': boolean;
            'feature.profiler.cpu_js': boolean;
            latency: boolean;
            catchExceptions: boolean;
            profiling: boolean;
            metrics:
            { http: boolean;
                runtime: boolean;
                eventLoop: boolean;
                network: boolean;
                v8: boolean; }
            standalone: boolean;
            tracing: { outbound: boolean, enabled: boolean; }
            module_conf: {}
            apm: { version: string, type: string; }
            module_name: string;
            module_version: string; }
        axm_monitor:
        { 'Heap Size':
            { value: string;
                type: string;
                unit: string;
                historic: boolean; }
            'Heap Usage':
            { value: number;
                type: string;
                unit: string;
                historic: boolean; }
            'Used Heap Size':
            { value: string;
                type: string;
                unit: string;
                historic: boolean; }
            'Active requests':
            { value: number, type: string, historic: boolean; }
            'Active handles': { value: number, type: string, historic: boolean; }
            'Event Loop Latency':
            { value: string;
                type: string;
                unit: string;
                historic: boolean; }
            'Event Loop Latency p95':
            { value: string;
                type: string;
                unit: string;
                historic: boolean; }
            'HTTP Mean Latency':
            { value: number;
                type: string;
                unit: string;
                historic: boolean; }
            'HTTP P95 Latency':
            { value: number;
                type: string;
                unit: string;
                historic: boolean; }
            HTTP:
            { value: number;
                type: string;
                unit: string;
                historic: boolean; } }
        axm_actions:
        [ { action_name: string, action_type: string, arity: number },
            { action_name: string;
            action_type: string;
            arity: number; },
            { action_name: string;
            action_type: string;
            arity: number; },
            { action_name: string;
            action_type: string;
            arity: number; },
            { action_name: string;
            action_type: string;
            arity: number; } ];
        pm_uptime: number;
        status: string;
        unique_id: string;
        string: string;
        PM2_HOME: string;
        NCFBI_SITE: string;
        NODE_ENV: string;
        ALLUSERSPROFILE: string;
        APPDATA: string;
        CLASSPATH: string;
        CommonProgramFiles: string;
        CommonProgramW6432: string;
        COMPUTERNAME: string;
        ComSpec: string;
        CV_Instance001: string;
        DB2INSTANCE: string;
        DriverData: string;
        LOCALAPPDATA: string;
        NUMBER_OF_PROCESSORS: string;
        OS: string;
        Path: string;
        PATHEXT: string;
        PM2_JSON_PROCESSING: string;
        PM2_USAGE: string;
        PROCESSOR_ARCHITECTURE: string;
        PROCESSOR_IDENTIFIER: string;
        PROCESSOR_LEVEL: string;
        PROCESSOR_REVISION: string;
        ProgramData: string;
        ProgramFiles: string;
        ProgramW6432: string;
        PROMPT: string;
        PSModulePath: string;
        PUBLIC: string;
        SystemDrive: string;
        SystemRoot: string;
        TEMP: string;
        TMP: string;
        USERDOMAIN: string;
        USERNAME: string;
        USERPROFILE: string;
        VBOX_MSI_INSTALL_PATH: string;
        windir: string;
        NODE_APP_INSTANCE: number;
        vizion_running: boolean;
        km_link: boolean;
        pm_pid_path: string;
        pm_err_log_path: string;
        pm_out_log_path: string;
        exec_mode: string;
        exec_interpreter: string;
        pm_cwd: string;
        pm_exec_path: string;
        node_args: [];
        name: string;
        args: [ string, string ];
        env: { NODE_ENV: string, NCFBI_SITE: string }
        max_memory_restart: number;
        instances: number;
        vizion: boolean;
        autorestart: boolean;
        watch: boolean;
        instance_var: string;
        pmx: boolean;
        automation: boolean;
        treekill: boolean;
        username: string;
        windowsHide: boolean;
        kill_retry_time: number;
        env_production: { NODE_ENV: string }
        namespace: string;
        merge_logs: boolean }
    pm_id: number;
    monit: { memory: number, cpu: number }

}